import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrders } from '../iwishlist';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private wishlist:WishlistService,private activateroute:ActivatedRoute,private router:Router) { 
    const tid=this.activateroute.snapshot.paramMap.get("id");
    this.uid=Number(tid);
    console.log(this.uid)
this.wishlist.getOrder(this.uid).subscribe((data)=>{this.orderlist=data;
  this.orderlist.reverse()
console.log(this.orderlist)})


  }
  orderdata:IOrders={OrderTimestamp:"2022-09-08 00:00:00",OrderId:0,UserId:2,ProductId:0,Quantity:1,TotalCost:0,Product:{ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
  Brand:'',
  CountAvailable:0,
   TotalRatings:0,
   SumRatings:0}
}
orderlist:IOrders[]=[]
uid:number=0
  ngOnInit(): void {
  }

}
