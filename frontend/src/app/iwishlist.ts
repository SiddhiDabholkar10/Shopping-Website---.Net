import { DeclarationListEmitMode } from "@angular/compiler";
import { IProduct } from "./iproduct";

export interface IWishlist {
    WishlistId:number;
    ProductId:number;
    UserId:number;
    Product:IProduct;
}

export interface ICart{
    CartId:number,
    ProductId:number,
     Quantity:number  
     UserId :number

    Product:any
    
}

export interface IOrders
{
    OrderId:number, 
    OrderTimestamp:string,
    TotalCost:number,
      UserId:number,  Quantity:number,
ProductId:number,

    Product:any
}

