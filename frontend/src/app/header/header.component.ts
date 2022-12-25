import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRetailer } from '../IRetailer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
data:any
  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem("userkey") || localStorage.getItem("retailerkey") || "{}")


  }
  
  logout()
  {
    localStorage.removeItem("userkey")
    localStorage.removeItem("retailerkey")
    localStorage.removeItem("adminkey")
    localStorage.removeItem("comparekey")

    this.router.navigate(['/login'])
  }
  userdata:any
isuserlogged():boolean
{
  if(localStorage.getItem("userkey"))
  {
    this.userdata=JSON.parse(localStorage.getItem("userkey")|| "{}")
  return true
  }
  else
  return false
}
retdata:IRetailer={RetId:0, RetName:'', RetEmail:'', RetMob:'', RetLoc:'', RetPwd:'', IsAccepted:false}

isretailerlogged():boolean
{
  if(localStorage.getItem("retailerkey"))
  {

    this.retdata=JSON.parse(localStorage.getItem("retailerkey")||"{}");
    console.log(this.retdata)
  return true
  }
  else
  return false
}


isadminlogged():boolean
{
  if(localStorage.getItem("adminkey"))
  {
   
  return true
 }
  else
  return false
}

}
