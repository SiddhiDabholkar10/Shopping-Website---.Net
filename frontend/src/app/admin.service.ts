import { Injectable } from '@angular/core';
import { IRetailer } from './IRetailer';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://localhost:53101/api/";

  httpOptions={headers : new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }
  getPendingRetailers():Observable<IRetailer[]>
  {
     return this.httpclient.get<IRetailer[]>(this.url+"Admin/ListPendingRetailers");
  }
  getRetailers():Observable<IRetailer[]>
  {
     return this.httpclient.get<IRetailer[]>(this.url+"Admin/ListRetailers");
  }


  editRetailer(ret:IRetailer):Observable<IRetailer>
  {
   return this.httpclient.put<IRetailer>(this.url+"Admin/EditRetailer/"+ret.RetId,ret,this.httpOptions);
  }

  deleteRetailer(ret:IRetailer):Observable<IRetailer>
  {
   return this.httpclient.delete<IRetailer>(this.url+"Admin/DeleteRetailer/"+ret.RetId,this.httpOptions);
  }

  deleteRetAccount(id:number):Observable<IRetailer>
  {
   return this.httpclient.delete<IRetailer>(this.url+"Admin/DeleteRetailer/"+id,this.httpOptions);
  }

}
