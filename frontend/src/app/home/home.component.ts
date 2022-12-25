import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';
import { ICategory } from '../icategory';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productlist:IProduct[]=[]

  constructor(private productservice:ProductService,private activateroute:ActivatedRoute,private router:Router) {
    this.productservice.getProducts().subscribe((data)=>{this.productlist=data})
    }
    

  ngOnInit(): void {
  }

}
