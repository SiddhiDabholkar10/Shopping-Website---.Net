import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';
import { ICategory } from '../icategory';
import { ActivatedRoute, Router } from '@angular/router';
import { IRetailer } from '../IRetailer';
import { RetailerSignupService } from '../retailer-signup.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  constructor(private productservice:ProductService,private retailersignupservice:RetailerSignupService,private activateroute:ActivatedRoute,private router:Router) {
    this.productservice.getCategory().subscribe((data)=>{this.category=(data)})
  }
   productdata:IProduct={ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
  Brand:'',
  CountAvailable:0,
  TotalRatings:0,
  SumRatings:0}
  retid:number=0;
  cat:ICategory={CategoryId:0,CategoryName:''}
  productlist:IProduct[]=[]
  category:ICategory[]=[]
catName:any[]=[]
catId:number=0
 retdata:any=[]

  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get("id");
    this.retid=Number(tid);
    this.productservice.getRetProduct(this.retid).subscribe((data:IProduct[])=>{this.productlist=data;
       console.log(this.productlist);
this.productlist.forEach((prod)=>{
  this.catId=prod.CategoryId;
  //console.log(this.productId);

        this.category.forEach((data)=>{
         //console.log(data);
         if(data.CategoryId===this.catId)
         {
           this.catName.push(data.CategoryName);
         }  
        })
       } );
    })
  }
  addproduct:boolean=true
check(ret:number)
{
  this.retailersignupservice.getRetailer(ret).subscribe((data)=>{this.retdata=data;
    
  if(this.retdata.IsAccepted==false)
  {
  alert("you do not have permission to add product");
  //this.addproduct=false
  }
  else{  
  this.router.navigate(['/retailer/my-products/add-product/',this.retid]);
  }

  
  
  
});

}

}


