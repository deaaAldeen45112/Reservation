import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';
import { PaymentMethodService } from 'src/app/service/paymentMethod.service';
import { PaymentMethod } from 'src/data/paymentMethod';

@Component({
  selector: 'app-edit-payment-method',
  templateUrl: './edit-payment-method.component.html',
  styleUrls: ['./edit-payment-method.component.css']
})
export class EditPaymentMethodComponent implements OnInit {

  list:any;
  editId:number=-1;
    constructor(private paymentMethodService:PaymentMethodService,private route:ActivatedRoute) { }
  
    editPaymentMethod= new FormGroup({
      name: new FormControl(),
    });
    UpdatePaymentMethod(){  
  let paymentMethod :PaymentMethod =new PaymentMethod();
  paymentMethod.Payment_Method_Id=this.list.payment_Method_Id;
  paymentMethod.Payment_Method_Name=this.editPaymentMethod.controls['name'].value;

  //menuCategory.Menu_Category_Parent_Id=Number.parseInt(this.editMenuCategory.controls['parentId'].value);*/
  console.log('deaa');
  this.paymentMethodService.UpdatePaymentMethod(paymentMethod).subscribe((res)=>{console.log(res)});   
  
  }
  GetPaymentMethodByPaymentMethodId(paymentMethodId:number){
    this.paymentMethodService.GetPaymentMethodByPaymentMethodId(paymentMethodId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
    }
  
  ngOnInit(): void {
  
  this.route.params.subscribe(res=>{
   this.editId= res['id'];
  this.GetPaymentMethodByPaymentMethodId(this.editId);
  });
  }
  
}
