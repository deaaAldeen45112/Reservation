import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResrvationTableClass } from '../shared/resrvation-table-class.model';
import { TableClass } from '../shared/table-class.model';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor(private http: HttpClient) { }
  GetTables() {
    return this.http.get<TableClass[]>(environment.apiUrl + 'table/GetAllTables');
  }
  uploadImage(file: FormData) {

    return this.http.post(environment.apiUrl + 'table/UploadImage/', file, { responseType: 'text' });
  }
  GetImage(imageName: string[]) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'text/plain; charset=utf-8'
      }),
      responseType: 'text' as 'json'
    };
    return this.http.post(environment.apiUrl + 'table/Get', imageName, httpOptions);
  }
  CreateTable(table: any) {
    return this.http.post(environment.apiUrl + 'table/AddTable', table);
  }
  UpdateTable(table: any) {
    return this.http.put(environment.apiUrl + "table/UpdateTable", table);
  }
  DeleteTable(id?: number) {
    return this.http.delete(environment.apiUrl + 'table/DeleteTable/' + id, this.requestOptions);
  }
  GetById(id: number) {
    return this.http.get(environment.apiUrl + 'table/GetByID/' + id, this.requestOptions);
  }

  FilterByNumberOfChairs(chairs: number) {
    return this.http.get<TableClass[]>(environment.apiUrl + 'table/FilterByNumberOfChairs/' + chairs);
  }
  FilterByDate(filter: any) {

    return this.http.post<TableClass[]>(environment.apiUrl + 'table/getTableByDate', filter);
  }
  FilterByDateAndChair(filter: any) {
    return this.http.post<TableClass[]>(environment.apiUrl + 'table/getTableByDateAndPerson/', filter);
  }
}

