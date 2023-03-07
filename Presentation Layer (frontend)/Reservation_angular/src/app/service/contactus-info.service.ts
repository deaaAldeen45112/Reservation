import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactUsInfoClass } from '../shared/contact-us-info-class';

@Injectable({
  providedIn: 'root'
})
export class ContactusInfoService {

  constructor(private http :HttpClient) { }
  getContactUsInfo()
  {
    return this.http.get<ContactUsInfoClass>(environment.apiUrl+'contactUsInfo/GetContactUsInfo'); 
  }

  UpdateContactUsInfo(contactUsInfo :ContactUsInfoClass)
  {
    return this.http.put(environment.apiUrl+'contactUsInfo/UpdateContactUsInfo',contactUsInfo); 
  }
}
