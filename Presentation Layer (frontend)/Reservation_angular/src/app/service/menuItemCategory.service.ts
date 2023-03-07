import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/data/cart';
import { Cash } from 'src/data/cash';
import { Credit } from 'src/data/credit';
import { Footer } from 'src/data/footer';
import { MenuItem } from 'src/data/menuItem';
import { MenuCategory } from 'src/data/menuItemCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuitemCategoryService {
    headerDict={
        'Content-Type':'application/json',
        'Accept':'application/json'
        }
     requestOptions={
          headers:new HttpHeaders(this.headerDict)
          }
  constructor(private http:HttpClient,private router:Router) { }

  InsertMenuCategory(menuCategory :MenuCategory){
return  this.http.post<boolean>(environment.apiUrl+"MenuCategory/InsertMenuCategory",menuCategory,this.requestOptions)

  }
  UpdateMenuCategory(b:any){
    console.log(b.Menu_Category_Id+"llllll");

    return this.http.put<boolean>(environment.apiUrl+"MenuCategory/UpdateMenuCategory",b,this.requestOptions)
  }
  DeleteMenuCategory(categoryId:number){
    return  this.http.delete<boolean>(environment.apiUrl+"MenuCategory/DeleteMenuCategory?categoryId="+categoryId,this.requestOptions)
  }
  GetAllMenuCategory(){
    return this.http.get<any[]>(environment.apiUrl+"MenuCategory/GetAllMenuCategory",this.requestOptions)
  }
  GetMenuCategoryById(categoryId:number){
    return this.http.get<any[]>(environment.apiUrl+"MenuCategory/GetMenuCategoryById?categoryId="+categoryId,this.requestOptions)
  }
  GetMenuCategoryByName(name :string){
    return this.http.get<any[]>(environment.apiUrl+"MenuCategory/GetMenuCategoryByName?name="+name,this.requestOptions)
  }
  GetMenuCategoryByParentId(ParentId:number){
    return this.http.get<any[]>(environment.apiUrl+"MenuCategory/GetMenuCategoryByParentId?ParentId="+ParentId,this.requestOptions)
  }
  GetMenuCategoryByParentIdAndName(ParentId:number, name :string ){
    return this.http.get<any[]>(environment.apiUrl+"MenuCategory/GetMenuCategoryByParentIdAndName?ParentId="+ParentId+"&name="+name,this.requestOptions)
  }
}
