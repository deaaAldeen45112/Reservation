import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/data/cart';
import { Cash } from 'src/data/cash';
import { Credit } from 'src/data/credit';
import { Footer } from 'src/data/footer';
import { MenuItem } from 'src/data/menuItem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {
  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
  constructor(private http:HttpClient,private router:Router) { }
  getAllMenuItems(){
     return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetAllMenuItem',this.requestOptions);
  
  }
  editMenuItem(menuItem:MenuItem){ 
   return this.http.put<boolean>(environment.apiUrl+'MenuItem/UpdateMenuItem',menuItem,this.requestOptions);

  }
  deleteMenuItem(id :number){
    return this.http.delete<boolean>(environment.apiUrl+'MenuItem/DeleteMenuItem/?ItemId='+id,this.requestOptions);

  }
  addMenuItem(menuItem:MenuItem){
    console.log(menuItem.Menu_Item_Name);

    return this.http.post<boolean>(environment.apiUrl+'MenuItem/InsertMenuItem',menuItem,this.requestOptions);
  }

   getMenuItemById(id:number){
     console.log(id);
    return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetMenuItemByMenuItemId?Id='+id,this.requestOptions);

   }

   

   uploadImage(file: FormData) {
    
    return this.http.post(environment.apiUrl+'MenuItem/UploadImage/', file,{responseType: 'text'});
  }
   GetMenuItemByIdAndName( id:number,  name:string){

      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetMenuItemByIdAndName?Id='+id+"&name="+name,this.requestOptions);

     }
     GetMenuItemByCategoryId(id:number){

      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetMenuItemById?Id='+id,this.requestOptions);
     }
     GetMenuItemByNameAndBetweenPrice(name:string, price1:number,  price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetMenuItemByNameAndBetweenPrice?name='+name+"&price1="+price1+"&price2="+price2,this.requestOptions);
     }
     GetMenuItemByBetweenPrice(price1:number, price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetMenuItemByBetweenPrice?price1='+price1+"&price2="+price2,this.requestOptions);
     }

     GetMenuItemByName( name:string){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetMenuItemByName?name='+name,this.requestOptions);
     }
     GetCheapestMenuItemByIdAndNameAndBetweenPrice( id:number,  name:string,  price1:number,  price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestMenuItemByIdAndNameAndBetweenPrice?Id='+id+"&name="+name+"&price1="+price1+"&price2="+price2,this.requestOptions);
    }
     GetCheapestMenuItemByIdAndName( id:number,name:string){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestMenuItemByIdAndName?Id='+id+"&name="+name,this.requestOptions);
     }
     GetCheapestMenuItemById(id:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestMenuItemById?Id='+id,this.requestOptions);
     }
     GetCheapestMenuItemByNameAndBetweenPrice(name:string, price1:number, price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestMenuItemByNameAndBetweenPrice?name='+name+"&price1="+price1+"&price2="+price2,this.requestOptions);
   }
     GetCheapestMenuItemByBetweenPrice( price1:number, price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestMenuItemByBetweenPrice?price1='+price1+"&price2="+price2,this.requestOptions);
    }
     GetCheapestMenuItemByName( name:string){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestMenuItemByName?name='+name,this.requestOptions);
     }
     GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id:number, name:string,  price1:number,  price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetCheapestGetExpensiveMenuItemByIdAndNameAndBetweenPriceMenuItemByIdAndNameAndBetweenPrice?Id='+id+"&name="+name+"&price1="+price1+"&price2="+price2,this.requestOptions);
    }
     GetExpensiveMenuItemByIdAndName(id:number,  name:string){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetExpensiveMenuItemByIdAndName?Id='+id+"&name="+name,this.requestOptions);
    }
     GetExpensiveMenuItemById( id:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetExpensiveMenuItemById?Id='+id,this.requestOptions);
     }
     GetExpensiveMenuItemByNameAndBetweenPrice( name:string, price1:number,  price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetExpensiveMenuItemByNameAndBetweenPrice?name='+name+"&price1="+price1+"&price2="+price2,this.requestOptions);
    }
     GetExpensiveMenuItemByBetweenPrice(price1: number, price2:number){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetExpensiveMenuItemByBetweenPrice?price1='+price1+"&price2="+price2,this.requestOptions);
    }
     GetExpensiveMenuItemByName (name:string){
      return this.http.get<any[]>(environment.apiUrl+'MenuItem/GetExpensiveMenuItemByName?name='+name,this.requestOptions);
     }





}

