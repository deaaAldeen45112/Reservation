
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  }
  constructor(public http: HttpClient, private route: Router) { }
  //dto
  GetAllCustomers() {
    return this.http.get(environment.apiUrl + "customer/GetAllCustomers", this.requestOptions)
  }
  GetCustomerByName(name: string) {
    return this.http.get(environment.apiUrl + "Customer/GetCustomerByName?name=" + name, this.requestOptions)
  }
  FilterCustomerByName(name: string) {
    return this.http.get(environment.apiUrl + "Customer/FilterCustomerByName?name=" + name, this.requestOptions)
  }
  GetCustomerById(id: number) {
    return this.http.get(environment.apiUrl + "Customer/GetCustomerById?id=" + id, this.requestOptions)

  }
  GetRegisterByRegisterId(regid:number){

    return this.http.get<any[]>(environment.apiUrl +"Register/GetRegisterByRegisterId?regId=" + regid, this.requestOptions)


  }

  UpdateRegister(id :number,name :string ,phone:string,password:string ){
    return this.http.put(environment.apiUrl+"Register/UpdateRegister?id="+id+"&name="+name+"&phone="+phone+"&password="+password,this.requestOptions);
  }



}