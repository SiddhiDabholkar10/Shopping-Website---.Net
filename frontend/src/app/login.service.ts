import { Injectable } from '@angular/core';
import { IRetailer } from './IRetailer';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { IUser } from './IUser';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:53101/api/";

  httpOptions={headers : new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }


  userLogin(username:string, password:string):Observable<IUser>
  {
      return this.httpclient.get<IUser>(this.url+"User/GetUsers/email/"+username).pipe(catchError(this.handleError));
  }

  retailerLogin(username:string, password:string):Observable<any>
  {
      return this.httpclient.get<IRetailer>(this.url+"Retailer/GetRetailers/email/"+username).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse)
  {
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n'+error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}
