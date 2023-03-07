
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';  
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from 'jwt-decode';
import { Register } from 'src/data/register';
import { AboutUs } from 'src/data/aboutus';
import { Basicorder } from 'src/data/basicOrder';
import { Observable, Timestamp } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }









 CountingOrderByDate(from_Date:Date,to_Date :Date)
    {

     // https://localhost:44343/api/Order/CountingOrderByDate?from_Date=20-FEB-2011&to_Date=10-FEB-2030
      return this.http.get<any[]>(environment.apiUrl+'Order/CountingOrderByDate?from_Date='+from_Date.toISOString()+'&to_Date='+to_Date.toISOString(),this.requestOptions);   
    }
  CountingOrderByDateAndByCustomerId(from_Date:Date,to_Date :Date,id :number)
    {
      return this.http.get<any[]>(environment.apiUrl+'Order/CountingOrderByDateAndByCustomerId?from_Date='+from_Date.toISOString()+"&to_Date="+to_Date.toISOString()+"&id="+id,this.requestOptions);   
    }
  CountingOrderByDateAndByWaiterId(from_Date:Date,to_Date :Date ,id:number)
    {
      return this.http.get<any[]>(environment.apiUrl+'Order/CountingOrderByDateAndByWaiterId?from_Date='+from_Date.toISOString()+"&to_Date="+to_Date.toISOString()+"&id="+id,this.requestOptions);   
    }

     GetOrderByCustomerId(cusId:number)
    {

      return this.http.get<any[]>(environment.apiUrl+'Order/GetOrderByCustomerId?cusId='+cusId,this.requestOptions);   
    }
    StatisticOrderByDate(from_Date:Date,to_Date :Date)
    {
      return this.http.get<any[]>(environment.apiUrl+'Order/CountingOrderByDate?from_Date='+from_Date.toISOString()+"&to_Date="+to_Date.toISOString());   
    }
   
   StatisticOrderByDateAndByCustomerId(from_Date:Date,to_Date :Date, id :number)
    {
      return this.http.get<any[]>(environment.apiUrl+'Order/CountingOrderByDate?from_Date='+from_Date.toISOString()+"&to_Date="+to_Date.toISOString()+"&id="+id,this.requestOptions);   
   }




InsertOrder(order :Basicorder){

return this.http.post<boolean>(environment.apiUrl+"Order/InsertOrder",order,this.requestOptions);
 }
 
UpdateOrder(order :Basicorder){
return this.http.put<boolean>(environment.apiUrl+"Order/UpdateOrder",order,this.requestOptions);
}
DeleteOrder(orderId: number){
return this.http.delete<boolean>(environment.apiUrl+"Order/DeleteOrder?orderId="+orderId,this.requestOptions);
 }
GetAllOrder(){
return this.http.get<any[]>(environment.apiUrl+"Order/GetAllOrder",this.requestOptions);   
 }
GetOrderById(orderId:number){
return this.http.get<any[]>(environment.apiUrl+"Order/GetOrderById?orderId="+orderId,this.requestOptions); 
 }
GetOrderByDate(fromDate:Date, toDate :Date){
  console.log(fromDate);
  return this.http.get<any[]>(environment.apiUrl+"Order/GetOrderByDate?fromDate="+fromDate.toISOString()+"&toDate="+toDate.toISOString(),this.requestOptions); 
}
UpdatePaymentStatusByOrderId( OrderId:number, PaymentStatus: string){
return this.http.put<boolean>(environment.apiUrl+"Order/UpdatePaymentStausByOrderId?OrderId="+OrderId+"&PaymentStatus="+PaymentStatus,this.requestOptions);
}
UpdateAccessStatusByOrderId(OrderId:number,AccessStatus: string ){
return this.http.put<boolean>(environment.apiUrl+"Order/UpdateAccessStatusByOrderId?OrderId="+OrderId+"&AccessStatus="+AccessStatus,this.requestOptions);
}
UpdateWaiterIdByOrderId(OrderId:number,WaiterId:number){
return this.http.put<boolean>(environment.apiUrl+"Order/UpdateWaiterIdByOrderId?OrderId="+OrderId+"&WaiterId="+WaiterId,OrderId,this.requestOptions);
}
GetLastOrderId(){
  return this.http.get<any[]>(environment.apiUrl+"Order/GetLastOrderId",this.requestOptions);
}
GetOrderByWaiterId(waiterId:number){
  return this.http.get<any[]>(environment.apiUrl+"Order/GetOrderByWaiterId?waiterId="+waiterId,this.requestOptions);
}
GetOrderNotAssignWaiter(){
  return this.http.get<any[]>(environment.apiUrl+"Order/GetOrderNotAssignWaiter",this.requestOptions);}
}  