import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service';

@Component({
  selector: 'app-show-payment-method',
  templateUrl: './show-payment-method.component.html',
  styleUrls: ['./show-payment-method.component.css']
})
export class ShowPaymentMethodComponent implements OnInit {

 
  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private paymentMethodService:PaymentMethodService) { }
 
 GetPaymentMethodByPaymentMethodId(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.paymentMethodService.GetPaymentMethodByPaymentMethodId(this.editId).subscribe((res:any[])=>{
 this.item=res[0];
 console.log(this.item)
 })
  console.log(this.editId)

 })

}


 ngOnInit(): void {
this.GetPaymentMethodByPaymentMethodId();    
 }
}
