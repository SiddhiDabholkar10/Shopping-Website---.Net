import { Component, OnInit } from '@angular/core';
import { IRetailer } from '../IRetailer';
import { Router } from '@angular/router';
import { UpdatepasswordService } from '../updatepassword.service';
import { Md5 } from 'md5-typescript';
@Component({
  selector: 'app-retailernewpass',
  templateUrl: './retailernewpass.component.html',
  styleUrls: ['./retailernewpass.component.css']
})
export class RetailernewpassComponent implements OnInit {

  constructor(private updateService:UpdatepasswordService,private router:Router) { }
  retailerdata:IRetailer={RetId:0, RetName:'', RetEmail:'', RetMob:'', RetLoc:'', RetPwd:'', IsAccepted:false}

  otp:any=''
  ngOnInit(): void {
  }
cnfPwd=''
  validate(usergot:IRetailer, otp:string)
  {
      this.updateService.getRetailer(usergot.RetEmail).subscribe((received)=>{this.retailerdata=received;
        if(otp==='123456')
        {
          usergot.RetPwd=Md5.init(usergot.RetPwd)
          this.retailerdata.RetPwd=usergot.RetPwd;
          this.cnfPwd=Md5.init(this.cnfPwd)
          if(this.retailerdata.RetPwd==this.cnfPwd)
          this.updateService.editRetailer(this.retailerdata).subscribe(()=>{alert("Password updated successfully");
        this.router.navigate(['/login'])})
  
        }
        else
        {
          alert("Enter the correct OTP");
        }})

     



  }

  getOtp()
{
  alert("Otp has been sent on your registered email address");
}

}

