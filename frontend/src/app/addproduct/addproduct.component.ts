import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';
import { ICategory } from '../icategory';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
productdata:IProduct={ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
Brand:'',
CountAvailable:0,
TotalRatings:0,
SumRatings:0}
category:ICategory[]=[]
cat:ICategory={CategoryId:0,CategoryName:''}
rid:number=0
changeClient(data:any){
  console.log(data);
}


  constructor(private productservice:ProductService,private router:Router,private activateroute:ActivatedRoute) {
    this.productservice.getCategory().subscribe((data)=>{
      this.category=(data);
    console.log(this.category)
  });

   }

id=0;
  saveproduct(product:IProduct,cat:ICategory)
{
  this.category.forEach((data)=>{
if(data.CategoryName===cat.CategoryName)
{
  this.id=data.CategoryId;
}
  })
  this.productdata.CategoryId=this.id;
console.log(product);
  this.productdata=product;
  this.productdata.RetId=this.rid;
  this.productservice.addProduct(this.rid,this.productdata).subscribe(()=>{
   // alert("Product added succesfully")

    this.router.navigate(['/retailer/my-products/',this.rid])
  });
}
 

  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get("id");
    this.rid=Number(tid);
  }

}
