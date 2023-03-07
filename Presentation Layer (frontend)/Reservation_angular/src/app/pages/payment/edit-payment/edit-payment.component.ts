import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';
import { Payment } from 'src/data/payment';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent  {

  list:any;
  editId:number=-1;
    constructor(private paymentService:PaymentService,private route:ActivatedRoute) { }
  
    editPayment= new FormGroup({
      price: new FormControl(),
      currncy:new FormControl(),
      paymentMethod:new FormControl(),
    });
    UpdatePayment(){  
  let payment :Payment =new Payment();
  payment.Payment_Id=this.list.payment_Id;
  payment.Payment_Price=Number.parseFloat(this.editPayment.controls['price'].value);
  payment.Payment_Currncy=this.editPayment.controls['currncy'].value;
  payment.Payment_Date=this.list.payment_Date;
  //payment.Payment_Method_Id=Number.parseInt(this.editPayment.controls['paymentMethod'].value);
  console.log('deaa'+this.list.payment_Id);
  this.paymentService.UpdatePayment(payment).subscribe((res)=>{console.log(res)});   
  
  }
  GetPaymentByPaymentId(paymentId:number){
    this.paymentService.GetPaymentByPaymentId(paymentId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
    }
  
  ngOnInit(): void {
  this.route.params.subscribe(res=>{
  this.editId= res['id'];
  this.GetPaymentByPaymentId(this.editId);
  });
  }
  
}
