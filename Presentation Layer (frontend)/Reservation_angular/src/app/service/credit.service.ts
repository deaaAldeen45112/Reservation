
import { CartItem } from "src/data/cartItem";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data/login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import jwt_decode from 'jwt-decode';
import { Register } from 'src/data/register';
import { Credit } from "src/data/credit";
@Injectable({
  providedIn: 'root'
})
export class CreditService {

  headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
    }
 requestOptions={
      headers:new HttpHeaders(this.headerDict)
      }
 constructor(public http:HttpClient,private route:Router) { }

    InsertCredit(credit :Credit){

       return this.http.post(environment.apiUrl+"Credit/InsertCredit/",credit,this.requestOptions)
    }
    UpdateCredit(credit :Credit){

       return this.http.put(environment.apiUrl+"Credit/UpdateCredit/",credit,this.requestOptions)
    }
    DeleteCreditByCreditId(creditId:number){

       return this.http.delete(environment.apiUrl+"Credit/DeleteCreditByCreditId?creditId="+creditId,this.requestOptions)
    }
    GetAllCredit(){

       return this.http.get(environment.apiUrl+"Credit/GetAllCredit",this.requestOptions)

    }
    UpdeteAmountByCreditNumber(credit:Credit){

        return this.http.put(environment.apiUrl+"Credit/UpdateCredit/",credit,this.requestOptions)

    }
    GetCreditByCreditNumber(creditNumber:string){

        return this.http.get<any[]>(environment.apiUrl+"Credit/GetCreditByCreditNumber?creditNumber="+creditNumber,this.requestOptions)

    }
        }