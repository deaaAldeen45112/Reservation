import { CartItem } from "src/data/cartItem";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from 'jwt-decode';
import { Register } from 'src/data/register';
@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
 DeleteFromCartItemByCartItemId(cartItemId:number){
  return this.http.delete(environment.apiUrl+'CartItem/DeleteFromCartItemByCartItemId?cartItemId='+cartItemId,this.requestOptions);

}
DeleteAllCartItemByCartId(cartId:number){

  return this.http.delete(environment.apiUrl+'CartItem/DeleteAllCartItemByCartId?cartId='+cartId,this.requestOptions);

  

}
GetCartItemByCartId(cartId:number){  

  return this.http.get<any[]>(environment.apiUrl+'CartItem/GetCartItemByCartId?cartId='+cartId,this.requestOptions)
}
 AddToCartItem(cartItem:CartItem){
  return this.http.post(environment.apiUrl+'CartItem/AddToCartItem',cartItem,this.requestOptions)
 }

        
        
        }