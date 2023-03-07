import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from 'jwt-decode';
import { Register } from 'src/data/register';
import { CartServiceService } from './cart-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router,private cartService:CartServiceService) { }
  
GetCustomerByRegisterId(regId :number){
return  this.http.get<any[]>("https://localhost:44343/api/Register/GetCustomerIdByRegisterId/?regId="+regId,this.requestOptions)
 

}

GetWaiterByRegisterId(regId :number){
  return  this.http.get<any[]>("https://localhost:44343/api/Register/GetWaiterIdByRegisterId/?regId="+regId,this.requestOptions)

}
 
 
 
 login(objLogin:Login){
    
     
    
  console.log(objLogin.Email+" "+objLogin.Pass);
  this.http.post(environment.apiUrl+'Jwt/?email='+objLogin.Email+'&pass='+objLogin.Pass,this.requestOptions).subscribe((res:any)=>{
  const token= res.token;
   console.log(token);
   localStorage.setItem('token',token);
   let data:any=jwt_decode(token);
   console.log(data.roleId);
   console.log(data.registerId);
   localStorage.setItem('role',data.role);
   localStorage.setItem('role_id',data.roleId);
   localStorage.setItem('register_id',data.registerId);
   localStorage.setItem('name',data.name);
   console.log(data.Name);
// cutomer 
   if(data.roleId=="0"){
    this.GetCustomerByRegisterId(Number.parseInt(data.registerId)).subscribe((res:any)=>{console.log(res)
      localStorage.setItem('customer_id',res[0].customer_Id);
      console.log(res[0].customer_Id)
    });
     this.cartService.GetCartByRegisterId(1).subscribe((res:any)=>{
       console.log(res[0].cart_Id)
       localStorage.setItem('cart_id',res[0].cart_Id);
       
window.location.href = './';
      
     })





  }

// admin
  if (data.roleId=="1")
{

  window.location.href = './';

}
// waiter
if (data.roleId=="2"){


  this.GetWaiterByRegisterId(Number.parseInt(data.registerId)).subscribe((res:any)=>{
    
    localStorage.setItem('waiter_id',res[0].waiter_Id);

    console.log(res)
    
window.location.href = './';
  });

}


  });

  }
  register(register:Register){

    this.http.post(environment.apiUrl+'Register/AddCustomer',register,this.requestOptions).subscribe((res:any)=>{
     console.log(res);
     this.route.navigate(['./security/login']);
  });





}
}  

    //provider      injector tree   compontent       
 // authservice -->  ngmoudule        
                     //parent     <--   parent ▲
                     //child   -->      child  |