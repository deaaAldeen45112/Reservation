import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService{
  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router){}
 
  


InsertRole(role:any){
  return  this.http.post<boolean>(environment.apiUrl+"Role/InsertRole",role,this.requestOptions);



}
UpdateRole(role:any){
  return  this.http.put<boolean>(environment.apiUrl+"Role/UpdateRole",role,this.requestOptions);



}

GetRoleByRoleId(roleId:number){
  return  this.http.get<any[]>(environment.apiUrl+"Role/GetRoleByRoleId",this.requestOptions);



}
DeleteRoleById(roleId:number){

  return  this.http.delete<boolean>(environment.apiUrl+"Role/DeleteRoleById?roleId="+roleId,this.requestOptions);


}
GetAllRole(){
  return  this.http.get<any[]>(environment.apiUrl+"Role/GetAllRole",this.requestOptions);


}
}