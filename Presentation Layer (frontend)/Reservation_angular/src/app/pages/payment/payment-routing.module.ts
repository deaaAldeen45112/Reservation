import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { GetlistPaymentComponent } from './getlist-payment/getlist-payment.component';
import { ShowPaymentComponent } from './show-payment/show-payment.component';

const routes: Routes = [

  {
    path: 'list'
    ,
    component: GetlistPaymentComponent
  },
  {
    path: 'show/:id',
    component: ShowPaymentComponent
  },
  {
    path: 'edit/:id',
    component: EditPaymentComponent
  }
  , {
    path: 'add'
    , component: AddPaymentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
