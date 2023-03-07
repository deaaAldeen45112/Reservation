import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TableClass } from '../shared/table-class.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  ReserveTable(reservationData: any) {
    return this.http.post(environment.apiUrl + "reservation/InsertReservation", reservationData);
  }
  UpdateReservation(reservation: any) {
    return this.http.put(environment.apiUrl + "reservation/UpdateReservation", reservation)
  }
  GetReservation() {
    return this.http.get<any>(environment.apiUrl + "reservation/GetAllReservation");
  }
  FilterReservationsBetweenDates(obj:any)
  {
    return this.http.post(environment.apiUrl + "reservation/FilterReservationBetweenDate",obj);
  }
  FilterReservationsFromDate(obj:any)
  {
    return this.http.post(environment.apiUrl + "reservation/FilterReservationFromDate",obj);
  }
  FilterReservationsToDate(obj:any)
  {
    return this.http.post(environment.apiUrl + "reservation/FilterReservationToDate",obj);
  }
  GetReservationBycustomerIdInSysTime(cusId:number){

    return this.http.get<any[]>(environment.apiUrl + "reservation/GetReservationBycustomerIdInSysTime?cusId="+cusId);


  }



}
