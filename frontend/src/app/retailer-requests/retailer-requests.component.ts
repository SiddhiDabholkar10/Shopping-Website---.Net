import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IRetailer } from '../IRetailer';
import { Router } from '@angular/router';
import { FOCUS_TRAP_INERT_STRATEGY } from '@angular/cdk/a11y';

@Component({
  selector: 'app-retailer-requests',
  templateUrl: './retailer-requests.component.html',
  styleUrls: ['./retailer-requests.component.css']
})
export class RetailerRequestsComponent implements OnInit {
  retailerlist: IRetailer[] =[]
  constructor(private adminservice: AdminService, private router:Router) {

    this.adminservice.getPendingRetailers().subscribe((data)=>this.retailerlist=data)
  }

  ngOnInit(): void {
  }

  editRetailer(ret:IRetailer)
  {
this.adminservice.editRetailer(ret).subscribe(()=>{

  alert("Retailer is accepted");

  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  this.router.navigate([currentUrl]);
  });
   });

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

