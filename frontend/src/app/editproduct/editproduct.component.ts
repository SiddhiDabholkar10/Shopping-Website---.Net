import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';
import { ICategory } from '../icategory';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productdata:IProduct={ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
  Brand:'',
  CountAvailable:0,
  TotalRatings:0,
  SumRatings:0}
  pid:number=0
  cat:ICategory={CategoryId:0,CategoryName:''}

  category:ICategory[]=[]
  
  
    constructor(private productservice:ProductService,private router:Router,private activateroute:ActivatedRoute) {
      this.productservice.getCategory().subscribe((data)=>{this.category=(data)});
  
     }
     changeClient(data:any){
      console.log(data);
    }
  
    saveproduct(product:IProduct,cat:ICategory)
{
  this.category.forEach((data)=>{
if(data.CategoryName===cat.CategoryName)
{
  this.pid=data.CategoryId;
}
  })
  this.productdata=product;
  console.log(this.productdata);
  this.productservice.editProduct(this.productdata).subscribe(()=>{
    alert("Record Edited Successfully")
this.router.navigate(['/retailer/my-products/',this.productdata.RetId])
  })
 
}
 
   
  catid:number=0;
    ngOnInit(): void {
      const tid=this.activateroute.snapshot.paramMap.get("id");
      this.pid=Number(tid);
      console.log(this.pid)

      this.productservice.getProduct(this.pid).subscribe((data:IProduct)=>{this.productdata=data;     
         console.log(this.productdata)
         this.catid=this.productdata.CategoryId
         this.category.forEach((data)=>{
          if(data.CategoryId===this.catid)
          {
            this.cat.CategoryName=data.CategoryName;
          }
         })
      });
    }
  
  }
  