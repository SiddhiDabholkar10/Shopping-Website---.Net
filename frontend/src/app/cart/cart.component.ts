import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart, IOrders } from '../iwishlist';
import { WishlistService } from '../wishlist.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartdata:ICart={CartId:0,ProductId:0,UserId:0,Quantity:1,Product:{ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
  Brand:'',
  CountAvailable:0,
  TotalRatings:0,
  SumRatings:0}
   }
cartlist:ICart[]=[]
uid:number=0
  constructor(private productservice:ProductService,private wishlist:WishlistService,private activateroute:ActivatedRoute,private router:Router) {
   
   }
data:any
  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem("userkey")|| "{}")

    const tid=this.activateroute.snapshot.paramMap.get("id");
    this.uid=Number(tid);
    console.log(this.uid)
    this.wishlist.getCart(this.uid).subscribe((data)=>{this.cartlist=data;
    console.log(this.cartlist)})


  }
  productdata:IProduct={ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
  Brand:'',
  CountAvailable:0,
  TotalRatings:0,
  SumRatings:0}

  plus(c:ICart){
    if(c.Quantity!=5){
     console.log(c.ProductId)
      this.productservice.getProduct(c.ProductId).subscribe((data:IProduct)=>{this.productdata=data;
        console.log(this.productdata)
      if(c.Quantity>=this.productdata.CountAvailable)
      {
        alert("Not enough stock available")
      }
      else{
        c.Quantity++;
        this.wishlist.editQuantity(c.CartId,c).subscribe();
      }
      })  
    }   

    
  }
  minus(c:ICart){
    if(c.Quantity!=1){
      c.Quantity--;
      this.wishlist.editQuantity(c.CartId,c).subscribe();

    }
  }

getSum()
{
  let sum=0;
  this.cartlist.forEach(element => {
    sum+=element.Product.Price*element.Quantity
    
  });
  return sum;
}

deletecart(cid:number)
{
this.wishlist.deleteCart(cid).subscribe(()=>{
  alert(`item deleted`);
  this.cartlist=this.cartlist.filter(x=>x.CartId!=cid)
});
}

orderdata:any={OrderTimestamp:"2022-09-08 00:00:00",OrderId:0,UserId:0,ProductId:0,Quantity:1,TotalCost:0,Product:
{ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
  Brand:'',
  CountAvailable:0,
 }
}

addorder(cart:ICart[])
{
  const now =new Date(new Date().setMinutes(new Date().getMinutes() + 330));
  console.log(cart)
  cart.forEach((element)=>
  {
    this.orderdata.OrderTimestamp=now
    this.orderdata.userid=this.data.UserId
    this.orderdata.productId=element.ProductId
    this.orderdata.TotalCost=element.Quantity*element.Product.Price
    this.orderdata.Quantity=element.Quantity
    
    this.wishlist.addOrder(this.orderdata).subscribe(()=>{
      this.productservice.editproductcount(element.ProductId,element).subscribe();
    })


  }
  )
  this.cartlist=[]
  this.wishlist.deleteCartUser(this.orderdata.userid).subscribe();
  this.router.navigate(['/user/my-orders/',this.data.UserId])


}

}
