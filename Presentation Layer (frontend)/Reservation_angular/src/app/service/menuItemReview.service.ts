
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemReview } from "src/data/menuItemReview";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuItemReviewService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }
InsertMenuItemReview( menuItemReview:MenuItemReview){
   console.log(menuItemReview.Menu_Item_Id)
   return this.http.post<boolean>(environment.apiUrl+"MenuItemReview/InsertMenuItemReview",menuItemReview,this.requestOptions);
}
UpdateMenuItemReview(menuItemReview:MenuItemReview ){
   return  this.http.put<boolean>(environment.apiUrl+"MenuItemReview/UpdateMenuItemReview",menuItemReview,this.requestOptions);

}
DeleteMenuItemReview(menuItemReviewId:number){
return this.http.delete<boolean>(environment.apiUrl+"MenuItemReview/DeleteMenuItemReview?menuItemReviewId="+menuItemReviewId,this.requestOptions);
}
GetAllMenuItemReview(){
  return  this.http.get<any[]>(environment.apiUrl+"MenuItemReview/GetAllMenuItemReview",this.requestOptions);
}
GetMenuItemReviewByMenuItemReviewId(menuItemReviewId:number){
      return  this.http.get<any[]>(environment.apiUrl+"MenuItemReview/GetMenuItemReviewByMenuItemReviewId?menuItemReviewId="+menuItemReviewId,this.requestOptions);

}
GetMenuItemReviewByMenuItemId(menuItemId:number){
   return this.http.get<any[]>(environment.apiUrl+"MenuItemReview/GetMenuItemReviewByMenuItemId?menuItemId="+menuItemId,this.requestOptions);

}

}
    
