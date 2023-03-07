import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/service/payment.service';
import { Payment } from 'src/data/payment';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  insertPayment= new FormGroup({
    paymentPrice: new FormControl(),
    paymentCurrncy:new FormControl(),
    orderId:new FormControl(),
    paymentMethodId :new FormControl(),
  });
  constructor(private paymentService :PaymentService) { }
  InsertPayment(){
 let payment: Payment=new Payment();


 payment.Payment_Price=Number.parseFloat( this.insertPayment.controls['paymentPrice'].value);
 payment.Payment_Currncy=this.insertPayment.controls['paymentCurrncy'].value;
 payment.Payment_Method_Id=null;
 payment.Order_Id=9;
 
 payment.Credit_Id=null;
 
console.log('insert')
//console.log(menuCategory.Menu_Category_Content+"aaaaa");

  this.paymentService.InsertPayment(payment).subscribe(res=>{console.log(res)});
  }
  ngOnInit(): void {
  }


}
