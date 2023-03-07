import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';


@Component({
  selector: 'app-show-payment',
  templateUrl: './show-payment.component.html',
  styleUrls: ['./show-payment.component.css']
})
export class ShowPaymentComponent implements OnInit {


  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private paymentService:PaymentService) { }
 
 GetPaymentByPaymentId(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.paymentService.GetPaymentByPaymentId(this.editId).subscribe((res:any[])=>{
 this.item=res[0];
 console.log(this.item)
 })
  console.log(this.editId)

 })

}


 ngOnInit(): void {
this.GetPaymentByPaymentId();    
 }
}
