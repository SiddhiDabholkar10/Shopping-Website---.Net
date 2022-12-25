import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';
import { ICategory } from '../icategory';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { filter } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productdata:IProduct={ProductId:0,ProductName:'',Price:0,CategoryId:0,RetId:0,ProdDesc:'',
Brand:'',
CountAvailable:0,
TotalRatings:0,
SumRatings:0}

searchtext:any;
productlist:IProduct[]=[]
cat:ICategory={CategoryId:0,CategoryName:''}
brand:string=''
brandlist:string[]=[]
category:ICategory[]=[]
temp:any


  constructor(private productservice:ProductService,private activateroute:ActivatedRoute,private router:Router) {
    this.productservice.getCategory().subscribe((data)=>{
      this.category=(data);
     console.log(this.category)})
  
    this.productservice.getProducts().subscribe((data)=>{this.productlist=(data);

    console.log(this.productlist);
    this.productlist.forEach((data)=>
    {
      console.log(data.Brand)
      this.brandlist.push(data.Brand.charAt(0).toUpperCase()+data.Brand.slice(1))
      console.log(this.brandlist)

      
    })
    this.temp=new Set(this.brandlist)
      this.brandlist=Array.from(this.temp)
      console.log(this.brandlist)


  })
   }

  ngOnInit(): void {
   

  }

id:number=0
products:IProduct[]=[]
  Filtercategory(name:string)
  {
    this.productservice.getProducts().subscribe((data)=>{this.productlist=(data)})
console.log(this.productlist)
    console.log(name)
    this.id=Number(name)
this.products=this.productlist.filter((p)=>p.CategoryId==this.id)
console.log(this.productlist)
console.log(this.products)
  }

  FilterBrand(name:string)
  {
    this.productservice.getProducts().subscribe((data)=>{this.productlist=(data)})
console.log(this.productlist)
    console.log(name)
this.products=this.productlist.filter((p)=>p.Brand.charAt(0).toUpperCase()+p.Brand.slice(1)==name)
console.log(this.productlist)
console.log(this.products)
  }
value=''
  Sort(name:any)
{
  console.log(name)
  if(name=='Ascending')
  {
    this.productlist.sort((a, b) => (a.ProductName.toUpperCase() < b.ProductName.toUpperCase() ? -1 : 1));
console.log(this.productlist);
  }
  if(name=='Descending')
  {
    this.productlist.sort((a, b) => (a.ProductName.toUpperCase() > b.ProductName.toUpperCase() ? -1 : 1));
    console.log(this.productlist);
  }
  if(name=='low')
  {
    this.productlist.sort((a, b) => (a.Price < b.Price ? -1 : 1));
    console.log(this.productlist);
  }
  if(name=='high')
  {
    this.productlist.sort((a, b) => ((a.Price) > (b.Price) ? -1 : 1));
    console.log(this.productlist);
  }
  if(name=='l1')
  {
    this.products=this.productlist.filter((p)=>p.Price<=1000)
  }
  if(name=='l2')
  {
    this.products=this.productlist.filter((p)=>p.Price<=5000)
  }
  if(name=='l3')
  {
    this.products=this.productlist.filter((p)=>p.Price<=10000)
  }
  if(name=='l4')
  {
    this.products=this.productlist.filter((p)=>p.Price<=50000)
  }
  
}

search()
{
  if(this.searchtext=='')
  {
    this.productservice.getProducts().subscribe((data)=>{this.productlist=(data)})
  }
  else
  
  {
    console.log(this.searchtext)
    this.productlist=this.productlist.filter(x=>x.ProductName.toUpperCase().includes(this.searchtext.toUpperCase())||x.ProdDesc.toUpperCase().includes(this.searchtext.toUpperCase()))
 console.log(this.productlist)
  }
}

}
