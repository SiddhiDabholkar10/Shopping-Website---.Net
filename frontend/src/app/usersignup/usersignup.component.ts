import { Component, destroyPlatform, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { IUser } from '../IUser';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Md5 } from 'md5-typescript';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  user: IUser = { UserId: 0, Fname: '', Lname: '', Email: '', Mob: '', UserAddress: '', UserPwd: '' }
  cpwd = ''
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  saveUser(user: IUser, cpwd: string) {
    this.user = user;

    this.user.UserPwd = Md5.init(this.user.UserPwd)
    cpwd = Md5.init(cpwd)



    if (user.UserPwd == cpwd) {
      console.log(this.user);
      this.userservice.addUser(this.user).subscribe(() => {
        alert("User Added Successfully");
        this.router.navigate(['/login']);
      });


    }
    else {
      alert("Please enter the same password");
    }


  }

}
