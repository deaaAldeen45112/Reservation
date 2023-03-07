import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-now',
  templateUrl: './reservation-now.component.html',
  styleUrls: ['./reservation-now.component.css']
})
export class ReservationNowComponent implements OnInit {

  constructor(private reservationService:ReservationService) { }
list:any[]=[];
  ngOnInit(): void {
    console.log("adsf");
    this.GetReservationBycustomerIdInSysTime();
  }
  GetReservationBycustomerIdInSysTime(){
    let customerId=localStorage.getItem('customer_id');
    console.log(customerId);
    if(customerId!=null)
    this.reservationService.GetReservationBycustomerIdInSysTime(Number.parseInt(customerId))
    .subscribe((res:any[])=>{this.list=res;
    
    console.log(res)
    

    console.log(res[0].res_Status)
    });

  }

  


}
