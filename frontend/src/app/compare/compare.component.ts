import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private wishlist:WishlistService) { }
comparedata:any=[]
  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem("userkey")|| "{}")

   this.comparedata= JSON.parse(localStorage.getItem("comparekey") || "{}")
  }
  data:any
remove(prod:any)
{
  this.comparedata=this.comparedata.filter(x=>x.ProductId!=prod.ProductId)
  console.log(this.comparedata)
  localStorage.setItem(("comparekey"),JSON.stringify(this.comparedata));
}
cartdata:any={CartId:0,ProductId:0,UserId:0,Quantity:1}

addtocart(cart:any)
{
  this.cartdata.ProductId=cart.ProductId;

this.cartdata.UserId=this.data.UserId
  console.log(this.cartdata)
  this.wishlist.addCart(this.cartdata).subscribe(()=>
  {
    alert(`${cart.ProductName} added to Cart`)
  })
}
}
