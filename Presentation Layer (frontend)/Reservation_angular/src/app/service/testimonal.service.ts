import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemReview } from "src/data/menuItemReview";
import { OrderItem } from 'src/data/orderItem';
import { SysImage } from 'src/data/sysImage';
import { Testimonial } from 'src/data/testimonial';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }

 InsertTestimonial(testimonial:Testimonial){
return this.http.post(environment.apiUrl+"Testimonial/InsertTestimonial",testimonial,this.requestOptions);
 }
 GetTestimonials(){
  return this.http.get<any[]>(environment.apiUrl+"Testimonial/GetTestimonials",this.requestOptions);
 }


}
    