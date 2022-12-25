import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';
import { ICategory } from '../icategory';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { IWishlist } from '../iwishlist';
import { WishlistService } from '../wishlist.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {

  constructor(private wishlist: WishlistService, private productservice: ProductService, private router: Router, private activateroute: ActivatedRoute) {
   
  }
  

  pid: number = 0
  productdata: IProduct = {
    ProductId: 0, ProductName: '', Price: 0, CategoryId: 0, RetId: 0, ProdDesc: '',
    Brand: '',
    CountAvailable: 0,
    TotalRatings: 0,
    SumRatings: 0
  }
  data: any
  ngOnInit(): void {

    const tid = this.activateroute.snapshot.paramMap.get("id");
    this.pid = Number(tid);
    console.log(this.pid)
    this.data = JSON.parse(localStorage.getItem("userkey") || "{}")
    console.log(this.data.UserId)

    this.productservice.getProduct(this.pid).subscribe((data: IProduct) => {
      this.productdata = data;
      console.log(this.productdata)
    }
    )
  }
  wish: any = {
    WishlistId: 0, ProductId: 0, UserId: 0
  }

  add(productId: number) {

    this.wish.ProductId = productId
    this.wish.UserId = this.data.UserId
    console.log(this.wish)
    if (this.data.UserId == null) {
      alert("Please login first");
      this.router.navigate(['/login']);
    }
    else {
      this.wishlist.addWishlist(this.wish).subscribe(() => {
        alert(`${this.wish.Product.ProductName} added to wishlist`)
      })
    }
  }

  cartdata: any = { CartId: 0, ProductId: 0, UserId: 0, Quantity: 1 }

  addtocart(cart: any) {
    this.cartdata.ProductId = cart.ProductId;
    this.cartdata.Quantity = this.selectedTeam;
    this.cartdata.UserId = this.data.UserId
    if (this.data.UserId == null) {
      alert("Please login first");
      this.router.navigate(['/login']);
    }
    else {
      console.log(this.cartdata)
      this.wishlist.addCart(this.cartdata).subscribe(() => {
        alert(`${cart.Product.ProductName} added to Cart`)
      })
    }
  }
  selectedTeam = '1';
  onSelected(value: string): void {
    this.selectedTeam = value;
  }
  compare: any = []
  addtocompare(prod: IProduct) {
    console.log(prod)
    this.compare = JSON.parse(localStorage.getItem("comparekey") || "{}")
    console.log(this.compare)
    if (this.data.UserId == null) {
      alert("Please login first");
      this.router.navigate(['/login']);
    }
    else {
      if (this.compare.length != 4) {
        let f = 0
        for (let i = 0; i < this.compare.length; i++) {
          if (this.compare[i].ProductId == prod.ProductId) {
            alert("already exist")
            f = 1
            break
          }
          if (this.compare[i].CategoryId != prod.CategoryId) {
            alert("select product of same category")
            f = 1
            break
          }
        }
        if (f == 0) {
          this.compare.push(prod);

          localStorage.setItem(("comparekey"), JSON.stringify(this.compare));

          alert("Added to compare")
        }
      }

      else {
        alert("Maximum 4 products can be compared")
      }
    }
  }
}
