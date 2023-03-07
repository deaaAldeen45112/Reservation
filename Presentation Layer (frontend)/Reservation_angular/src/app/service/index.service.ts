import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class IndexService{
  GetImage(imageName: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
    
  }
  uploadImage(file: FormData) {

    return this.http.post(environment.apiUrl + 'index/UploadImage', file, { responseType: 'text' });
  }
  GetHeader() {
    return this.http.get<any>(environment.apiUrl+'header/GetHeader');
  }

  GetFooter() {
    return this.http.get<any>(environment.apiUrl+'footer/GetFooter');
  }
  GetFooterH() {
    return this.http.get<any>(environment.apiUrl+'footer/GetFooterHeader');
  }
  GetIndex() {
    return this.http.get<any>(environment.apiUrl+'index/GetIndexTable');
  }
  UpdateIndex(index: any) {
    return this.http.put(environment.apiUrl + "index/UpdateIndex", index);
  }
}
