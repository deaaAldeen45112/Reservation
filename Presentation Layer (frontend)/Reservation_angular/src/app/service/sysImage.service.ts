import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemReview } from "src/data/menuItemReview";
import { OrderItem } from 'src/data/orderItem';
import { SysImage } from 'src/data/sysImage';
@Injectable({
  providedIn: 'root'
})
export class SysImageService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
AddSysImage(sysImage:SysImage){
    
}
UpdateSysImage(sysImage:SysImage){}
DeleteSysImage(id:number){}
GetAllSysImages(){}
GetSysImagesByName(name:string){}
}
    