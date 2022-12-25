import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { IRetailer } from '../IRetailer';
import { IOrders } from '../iwishlist';
import { RetailerSignupService } from '../retailer-signup.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {

  constructor(private retailer:RetailerSignupService,private adminservice:AdminService,private router:Router,private orderservice:WishlistService ) {
  
   }
  data:any
  retailerorders:IOrders[]=[]
  retailerdata:any={RetName:'',RetEmail:'',RetMob:'',RetLoc:''}
details()
{

this.retailer.getRetailer(this.data.RetId).subscribe((data)=>{this.retailerdata=data});
}
deleteret()
{
  this.adminservice.deleteRetAccount(this.data.RetId).subscribe(()=>{alert("retailer deleted")});
  localStorage.removeItem("retailerkey");
  this.router.navigate(['/login'])

}
revenue=0
  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem("retailerkey")|| "{}")
    
    this.orderservice.getOrderret(this.data.RetId).subscribe((data)=>{this.retailerorders=data;
      console.log(this.retailerorders),
      this.retailerorders.forEach((data)=>
      {
        this.revenue+=data.TotalCost;
      })
    })
  }

}
