import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import {HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ICategory } from './icategory';
import { ICart, IOrders } from './iwishlist';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:53101/api/'
  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};

  
    constructor(private httpclient:HttpClient) { }
    addProduct(id:number,product:IProduct):Observable<IProduct>
{
  return this.httpclient.post<IProduct>(this.url+"Retailer/AddProduct/"+id,product,this.httpOptions);

}
getCategory():Observable<ICategory[]>
{

  return this.httpclient.get<ICategory[]>(this.url+'Product/GetCategory/');
}
editProduct(product:IProduct):Observable<IProduct>
{
  return this.httpclient.put<IProduct>(this.url+"Retailer/EditProduct/"+product.ProductId,product,this.httpOptions);
}
getProduct(id:number):Observable<IProduct>
{
  return this.httpclient.get<IProduct>(this.url+'Product/GetProducts/'+id);
}
getRetProduct(id:number):Observable<IProduct[]>
{
  return this.httpclient.get<IProduct[]>(this.url+'Retailer/GetProducts/'+id);
}
getProducts():Observable<IProduct[]>
{
  return this.httpclient.get<IProduct[]>(this.url+'Product/GetProducts/');
}
editproductcount(id:number,order:ICart):Observable<ICart>
{
  return this.httpclient.put<ICart>(this.url+"Product/EditCount/"+id,order,this.httpOptions);
}


}
