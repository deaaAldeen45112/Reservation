import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaymentService } from 'src/app/service/payment.service';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service';

@Component({
  selector: 'app-getlist-payment-method',
  templateUrl: './getlist-payment-method.component.html',
  styleUrls: ['./getlist-payment-method.component.css']
})
export class GetlistPaymentMethodComponent implements OnInit {

  list:any[]=[];
  name:FormControl= new FormControl();
  constructor(private paymentMethodService:PaymentMethodService) { }

  ngOnInit(): void {
    this.GetAllPaymentMethod();
  }

  search(){


  }
  DeletePaymentMethodByPaymentMethodId(paymentMethodService:number){
  this.paymentMethodService.DeletePaymentMethodByPaymentMethodId(paymentMethodService).subscribe(res=>{console.log(res)
    this.GetAllPaymentMethod();
  });  
  
}
GetAllPaymentMethod(){
  this.paymentMethodService.GetAllPaymentMethod().subscribe((res:any[])=>{console.log(res);  this.list=res;})
  }

}
