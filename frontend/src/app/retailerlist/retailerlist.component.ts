import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IRetailer } from '../IRetailer';
import { Router } from '@angular/router';
import { FOCUS_TRAP_INERT_STRATEGY } from '@angular/cdk/a11y';
@Component({
  selector: 'app-retailerlist',
  templateUrl: './retailerlist.component.html',
  styleUrls: ['./retailerlist.component.css']
})
export class RetailerlistComponent implements OnInit {
  retailerlist: IRetailer[] =[]
  constructor(private adminservice: AdminService, private router:Router) {

    this.adminservice.getRetailers().subscribe((data)=>this.retailerlist=data)
  }




  ngOnInit(): void {
  }

  deleteRetailer(ret:IRetailer)
{
  this.adminservice.deleteRetailer(ret).subscribe(()=>
  {
    alert("Retailer is rejected");

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });

  }

  )
}
}
