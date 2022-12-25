import { Component, OnInit } from '@angular/core';
import { IRetailer } from '../IRetailer';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RetailerSignupService } from '../retailer-signup.service';
import { Md5 } from 'md5-typescript';
@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit {
  retailerdata:IRetailer={RetId:0, RetName:'', RetEmail:'', RetMob:'', RetLoc:'', RetPwd:'', IsAccepted:false}
cpwd=''
  constructor(private retailerRegister: RetailerSignupService, private router:Router) { }

  ngOnInit(): void {
  }

  saveRetailer(retailer:IRetailer, cpwd:string)
  {
    this.retailerdata=retailer;

    if(retailer.RetPwd== cpwd)
    {
      retailer.RetPwd=Md5.init(retailer.RetPwd)
      this.retailerRegister.addRetailer(this.retailerdata).subscribe(()=>{  alert("Retailer successfully Created");
      this.router.navigate(['login'])});
    
    }
    else
    {
      alert("Please enter the same password");

    }


  }



}
