import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IRetailer } from './IRetailer';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({providedIn: 'root'})
@Injectable({
  providedIn: 'root'
})
export class RetailerSignupService {
  url="http://localhost:53101/api/";
  httpOptions={headers : new HttpHeaders({'Content-type':'application/json'})};

  constructor(private httpclient:HttpClient) { }



addRetailer(ret:IRetailer):Observable<IRetailer>
{
  return this.httpclient.post<IRetailer>(this.url+'Retailer/AddRetailer',ret,this.httpOptions).pipe(catchError(this.handleError))
}
getRetailer(id:number):Observable<IRetailer[]>
{
  return this.httpclient.get<IRetailer[]>(this.url+'Admin/ListRetailers/'+id);
}

handleError(error:HttpErrorResponse)
{
  let errormessage='';
  errormessage=error.status+'\n'+error.statusText+'\n'+error.error;
  alert(errormessage);
  return throwError(errormessage);
}
}



