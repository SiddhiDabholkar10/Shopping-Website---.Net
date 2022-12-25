import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart, IWishlist } from '../iwishlist';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
wishdata:IWishlist={WishlistId:0,ProductId:0,UserId:0,Product:{ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
Brand:'',
CountAvailable:0,
TotalRatings:0,
SumRatings:0}
}
wishlistdata:IWishlist[]=[]
userid:number=0
  constructor(private wishlist:WishlistService,private activateroute:ActivatedRoute) { 
    const tid=this.activateroute.snapshot.paramMap.get("id");
    this.userid=Number(tid);
    console.log(this.userid)
this.wishlist.getWishList(this.userid).subscribe((data)=>{this.wishlistdata=data,
console.log(this.wishlistdata)})


  }

  deletewish(wish:any)
  {
    console.log(wish)
this.wishlist.deletewishlist(wish).subscribe(()=>{
  alert(`${wish.Product.ProductName}  deleted`);
  this.wishlistdata=this.wishlistdata.filter(x=>x!=wish)

})
  }

  cartdata:any={CartId:0,ProductId:0,UserId:0,Quantity:1}

addtocart(cart:any)
{
  this.cartdata.ProductId=cart.ProductId;
  this.cartdata.UserId=this.data.UserId;

  console.log(this.cartdata)
  this.wishlist.addCart(this.cartdata).subscribe(()=>
  {
    alert(`${cart.Product.ProductName} added to Cart`)
  })
}
data:any
  ngOnInit(): void {

    this.data=JSON.parse(localStorage.getItem("userkey")|| "{}")

  }

}
