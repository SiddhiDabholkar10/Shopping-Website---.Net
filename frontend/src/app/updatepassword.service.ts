import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from './IUser';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IRetailer } from './IRetailer';
@Injectable({
  providedIn: 'root'
})
export class UpdatepasswordService {
  url='http://localhost:53101/api/'
  httpOptions={headers : new HttpHeaders({'Content-type':'application/json'})};

  constructor(private httpclient:HttpClient) { }

  getUser(email:string):Observable<IUser>{
    return this.httpclient.get<IUser>(this.url+'User/GetUsers/Email/'+email);
   }

  editUser(user:IUser):Observable<IUser>{
    return this.httpclient.put<IUser>(this.url+'User/GetUsersEmail/'+user.Email,user,this.httpOptions);
   }

   getRetailer(email:string):Observable<IRetailer>{
    return this.httpclient.get<IRetailer>(this.url+'Retailer/GetRetailers/Email/'+email);
   }

   editRetailer(ret:IRetailer):Observable<IRetailer>{
    return this.httpclient.put<IRetailer>(this.url+'Admin/EditRetailer/email/'+ret.RetEmail ,ret,this.httpOptions);
   }


}
