import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItemReview } from "src/data/menuItemReview";
import { OrderItem } from 'src/data/orderItem';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class orderItemService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) {


  }
InsertOrderItem(orderItem:OrderItem ){
   return this.http.post<boolean>(environment.apiUrl+"orderItem/InsertOrderItem",orderItem,this.requestOptions);


}
UpdateOrderItem(orderItem:OrderItem ){
   return  this.http.put<boolean>(environment.apiUrl+"orderItem/UpdateOrderItem",orderItem,this.requestOptions);

}
DeleteOrderItem(orderItemId:number){
  return   this.http.delete<boolean>(environment.apiUrl+"orderItem/DeleteOrderItem?orderItemId="+orderItemId,this.requestOptions);

}
GetAllOrderItem(){
 return    this.http.get<any[]>(environment.apiUrl+"orderItem/GetAllOrderItem",this.requestOptions);

}
GetOrderItemByOrderItemId(orderItemId:number){
 return    this.http.get<any[]>(environment.apiUrl+"orderItem/GetOrderItemByOrderItemId?orderItemId="+orderItemId,this.requestOptions);

}
GetOrderItemByOrderId(orderId:number){
   return  this.http.get<any[]>(environment.apiUrl+"orderItem/GetOrderItemByOrderId?orderId="+orderId,this.requestOptions);

}
GetJoinOrderItemAndMenuItem(orderId:number){
  return  this.http.get<any[]>(environment.apiUrl+"orderItem/GetJoinOrderItemAndMenuItem?orderId"+orderId,this.requestOptions);

}
}
    