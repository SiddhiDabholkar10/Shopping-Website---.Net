import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IRetailer } from '../IRetailer';
import { Router } from '@angular/router';
import { FOCUS_TRAP_INERT_STRATEGY } from '@angular/cdk/a11y';
import { LoginService } from '../login.service';
import { IUser } from '../IUser';
import { FormsModule } from '@angular/forms';
import { Md5 } from 'md5-typescript';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userdata:IUser={UserId:0, Fname:'', Lname:'', Email:'', Mob:'', UserAddress:'', UserPwd:''}
  retailerdata:IRetailer={RetId:0, RetName:'', RetEmail:'', RetMob:'', RetLoc:'', RetPwd:'', IsAccepted:false}


  data={role:'', username:'', password:''}



  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

check(role:string)
{
  console.log(role)
if(role=='') alert("Please select role")
}

  login(data:any)
  {
    console.log(data)
    if(data.role=='Admin')
    {
      if(data.username==='admin' && data.password==='admin')
      {
        window.localStorage.setItem('adminkey', JSON.stringify({'name':'admin'}));
        console.log(JSON.parse(localStorage.getItem("adminkey")|| "{}"))
        this.router.navigate(['/admin/retailer-requests']);
      }

      else
      {
        alert("You have entered and incorrect password");
      }
    }


    else if(data.role=='User')
    {
     // console.log(data)

        this.loginservice.userLogin(data.username, data.password).subscribe((gotdata:IUser)=>
        {
          console.log(gotdata)
          this.userdata=gotdata;
          data.password=Md5.init(data.password)
          if(this.userdata.UserPwd == data.password)
        {
         // console.log(this.userdata)
         window.localStorage.setItem('userkey', JSON.stringify(this.userdata));
         window.localStorage.setItem('comparekey', JSON.stringify([]));

         //console.log(localStorage.getItem("userkey"))
          this.router.navigate(['']);
        }

        else
        {
          alert("You have entered  incorrect username or password");
        }
        })


    }


    else if(data.role=='Retailer')
    {
      console.log(data)
        this.loginservice.retailerLogin(data.username, data.password).subscribe((gotdata)=>

        {
        this.retailerdata=gotdata;
        console.log(this.retailerdata);
        data.password=Md5.init(data.password)
        if(this.retailerdata.RetPwd === data.password)
        {
          window.localStorage.setItem('retailerkey', JSON.stringify(this.retailerdata));

          this.router.navigate(['/retailer/my-products/',this.retailerdata.RetId]);
        }

        else
        {
          alert("You have entered incorrect username or password");
        }

      })


    }





  }

}
