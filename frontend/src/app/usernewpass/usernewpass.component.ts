import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdatepasswordService } from '../updatepassword.service';
import { Md5 } from 'md5-typescript';

@Component({
  selector: 'app-usernewpass',
  templateUrl: './usernewpass.component.html',
  styleUrls: ['./usernewpass.component.css']
})
export class UsernewpassComponent implements OnInit {

  constructor(private updateService:UpdatepasswordService,private router:Router) { }
  user:IUser={UserId:0, Fname:'', Lname:'', Email:'', Mob:'', UserAddress:'', UserPwd:''}
  otp:any=''
  ngOnInit(): void {
  }
cnfPwd=''
  validate(usergot:IUser, otp:string,cnfPwd:string)
  {
      this.updateService.getUser(usergot.Email).subscribe((received)=>{this.user=received;
        if(otp==='123456')
        {
          usergot.UserPwd=Md5.init(usergot.UserPwd)
          cnfPwd=Md5.init(cnfPwd)
          if(usergot.UserPwd==cnfPwd)
          {
          this.user.UserPwd=usergot.UserPwd;
          this.updateService.editUser(this.user).subscribe(()=>{alert("Password updated successfully");
        this.router.navigate(['/login'])})
          }
        }
  
        else
        {
          alert("Enter the correct OTP");
        }
      })

      

  }

  getOtp()
{
  alert("Otp has been sent on your registered email address");
}

}
