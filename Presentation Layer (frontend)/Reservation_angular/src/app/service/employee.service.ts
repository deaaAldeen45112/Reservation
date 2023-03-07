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
import { EmployeeDto } from "src/dto/EmployeeDto";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }


AddEmployee(emp:EmployeeDto)
 {

  return this.http.post(environment.apiUrl+"Register/AddWaiter",emp,this.requestOptions) 
 }

 UpdateEmployee(emp:any)
 {
     return this.http.put(environment.apiUrl+"Register/UpdateEmployee",emp,this.requestOptions) 
 }

DeleteEmployee(id:number)
 {
  return this.http.delete(environment.apiUrl+"Register/DeleteWaiter?id="+id,this.requestOptions) 
    
 }





//dto 
GetAllEmployee()
{
    return this.http.get<any[]>(environment.apiUrl+"Employee/GetAllWaiters",this.requestOptions) 
}
GetWaiterById(id :number){
    return this.http.get(environment.apiUrl+"Employee/GetWaiterById?id="+id)
}
FilterWaiterByName(name:string){
    return this.http.get(environment.apiUrl+"Employee/FilterWaiterById?name="+name)

}
GetAdmin(){
    return this.http.get(environment.apiUrl+"Employee/GetAdmin");
}
    

}