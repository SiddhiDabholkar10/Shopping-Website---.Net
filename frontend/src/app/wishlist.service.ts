import { Injectable } from '@angular/core';
import { IOrders, IWishlist } from './iwishlist';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { IUser } from './IUser';
import { HttpErrorResponse } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ICart } from './iwishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  url="http://localhost:53101/api/";

  httpOptions={headers : new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }

addWishlist(wishlist:IWishlist):Observable<IWishlist>
{
  return this.httpclient.post<IWishlist>(this.url+"Wishlist/AddWishList",wishlist,this.httpOptions);
}
getWishList(id:number):Observable<IWishlist[]>
{
  return this.httpclient.get<IWishlist[]>(this.url+"WishList/GetWishList/"+id);
}

deletewishlist(wishlist:IWishlist):Observable<IWishlist>
{
  return this.httpclient.post<IWishlist>(this.url+"Wishlist/DeleteWishlist",wishlist,this.httpOptions);
}

addCart(wishlist:IWishlist):Observable<IWishlist>
{
  return this.httpclient.post<IWishlist>(this.url+"Cart/AddCart",wishlist,this.httpOptions);
}

getCart(id:number):Observable<ICart[]>
{
  return this.httpclient.get<ICart[]>(this.url+"Cart/GetCarts/"+id);
}

editQuantity(id:number,cart:any):Observable<any>
{
return this.httpclient.put<any>(this.url+"Cart/EditCartQuantity/"+id,cart,this.httpOptions);
}

deleteCart(id:number):Observable<ICart>
{
  return this.httpclient.delete<ICart>(this.url+"Cart/DeleteCart/"+id,this.httpOptions);
}

addOrder(order:IOrders):Observable<IOrders>
{
return this.httpclient.post<IOrders>(this.url+"Order/AddOrder/",order,this.httpOptions);
}


deleteCartUser(id:number):Observable<ICart>
{
  return this.httpclient.delete<ICart>(this.url+"Cart/DeleteCartUser/"+id,this.httpOptions);
}

getOrder(id:number):Observable<IOrders[]>
{
  return this.httpclient.get<IOrders[]>(this.url+"Order/GetOrder/"+id);
}

getOrderret(id:number):Observable<IOrders[]>
{
  return this.httpclient.get<IOrders[]>(this.url+"Order/GetOrderRet/"+id);
}
}
