
 
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
    @Injectable({
      providedIn: 'root'
    })
    export class MenuItemDiscountService {
    
      headerDict={
        'Content-Type':'application/json',
        'Accept':'application/json'
        }
     requestOptions={
          headers:new HttpHeaders(this.headerDict)
          }
     constructor(public http:HttpClient,private route:Router) {}
        InsertMenuItemDiscount(menuItemDiscount:MenuItemDiscount ){
        return this.http.post<boolean>(environment.apiUrl+"MenuItemDiscount/InsertMenuItemDiscount",menuItemDiscount,this.requestOptions);

        }
        UpdateMenuItemDiscount(menuItemDiscount:MenuItemDiscount ){

          return  this.http.put<boolean>(environment.apiUrl+"MenuItemDiscount/UpdateMenuItemDiscount",menuItemDiscount,this.requestOptions);

        }
        DeleteMenuItemDiscount(menuItemId:number ){

           return this.http.delete<boolean>(environment.apiUrl+"MenuItemDiscount/DeleteMenuItemDiscount?menuItemId="+menuItemId,this.requestOptions);
        }
        GetAllMenuItemDiscount(){
         return   this.http.get<any[]>(environment.apiUrl+"MenuItemDiscount/GetAllMenuItemDiscount",this.requestOptions);
        }
        GetMenuItemDiscountByMenuItemId(menuItemId:number){
          console.log(menuItemId)
         return  this.http.get<any[]>(environment.apiUrl+"MenuItemDiscount/GetMenuItemDiscountByMenuItemId?menuItemId="+menuItemId,this.requestOptions);
        }

        GetMenuItemDiscountByDiscountId(discountId:number){
          return  this.http.get<any[]>(environment.apiUrl+"MenuItemDiscount/GetMenuItemDiscountByDiscountId?discountId="+discountId,this.requestOptions);
         }




        }
    

