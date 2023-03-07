import { CartItem } from "src/data/cartItem";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from 'jwt-decode';
import { Register } from 'src/data/register';
import { ContactUs } from "src/data/contactUs";
import { ContactUsInfo } from "src/data/contactUsInfo";
import { Header } from "src/data/header";
import { MenuItemDiscount } from "src/data/menuItemDiscount";
import { Payment } from "src/data/payment";
import { PaymentMethod } from "src/data/paymentMethod";
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
InsertPaymentMethod(paymentMethod:PaymentMethod){
  return this.http.post<boolean>(environment.apiUrl+"PaymentMethod/InsertPaymentMethod",paymentMethod,this.requestOptions);
}
GetPaymentMethodByPaymentMethodId(paymentMethodId:number){
  return this.http.get<any[]>(environment.apiUrl+"PaymentMethod/GetPaymentMethodByPaymentMethodId?paymentMethodId="+paymentMethodId,this.requestOptions);
  }
UpdatePaymentMethod(paymentMethod:PaymentMethod){
  return this.http.put<boolean>(environment.apiUrl+"PaymentMethod/UpdatePaymentMethod",paymentMethod,this.requestOptions);


}
DeletePaymentMethodByPaymentMethodId(PaymentMethodId:number){
 return   this.http.delete<boolean>(environment.apiUrl+"PaymentMethod/DeletePaymentMethodByPaymentMethodId?PaymentMethodId="+PaymentMethodId,this.requestOptions);


}
GetAllPaymentMethod(){
return  this.http.get<any[]>(environment.apiUrl+"PaymentMethod/GetAllPaymentMethod",this.requestOptions);


}
    


}
