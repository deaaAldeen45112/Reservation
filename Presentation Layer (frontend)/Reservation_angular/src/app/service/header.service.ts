
 
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
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
 UpdateHeader( header:Header){
this.http.put(environment.apiUrl+"Header/UpdateHeader",header,this.requestOptions)

 }
    }
