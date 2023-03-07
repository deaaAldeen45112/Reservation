import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemReview } from "src/data/menuItemReview";
import { OrderItem } from 'src/data/orderItem';
import { SysImage } from 'src/data/sysImage';
import { Testimonial } from 'src/data/testimonial';
import { Waiter } from 'src/data/waiter';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
InsertWaiter(waiter:Waiter){

  
}
UpdateWaiter(waiter:Waiter){}
DeleteWaiterByWaiterId(WaiterId:number){}
GetAllWaiter(){}
GetAvailableWaiter(){
return this.http.get<any[]>(environment.apiUrl+'Waiter/GetAvailableWaiter',this.requestOptions);

}


}
    