import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AboutUsClass } from '../shared/about-us-class.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  

  constructor(private http :HttpClient) { }

  UpdateAboutUs(aboutUs : any)
  {
    return this.http.put(environment.apiUrl +'aboutUs/UpdateAboutUs',aboutUs);
  }
  GetAboutUs()
  {
    return this.http.get<AboutUsClass>(environment.apiUrl +'aboutUs/GetAboutUs'); 
  }
}
