import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private user:UserService) { }
data:any
  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem("userkey")|| "{}")

  }
  userdatalist:any={Fname:'',Lname:'',Email:'',UserAddress:'',Mob:''}
details()
{
  this.user.getUser(this.data.UserId).subscribe((data)=>{this.userdatalist=data})
}
}
