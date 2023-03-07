import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactUsClass } from '../shared/contact-us-class';
import { ContactUsInfoClass } from '../shared/contact-us-info-class';

@Injectable({
  providedIn: 'root'
})
export class ContactUsServiceService {

  constructor(private http:HttpClient) { }
  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
  AddContactUs(contactUs:any)
  {
    
    return this.http.post(environment.apiUrl+'contactUs/AddContactUs',contactUs,this.requestOptions);
    
  }
  GetContactUsBySubject(subject :string)
  {
    return this.http.get(environment.apiUrl+'contactUs/GetContactUsBySubject/'+subject); 
  }
  GetAllContactUs()
  {
    return this.http.get(environment.apiUrl+'contactUs/GetAllContactUs'); 
  }


  
}
