import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPaymentComponent } from '../payment/edit-payment/edit-payment.component';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { EditPaymentMethodComponent } from './edit-payment-method/edit-payment-method.component';
import { GetlistPaymentMethodComponent } from './getlist-payment-method/getlist-payment-method.component';
import { ShowPaymentMethodComponent } from './show-payment-method/show-payment-method.component';

const routes: Routes = [

  {
    path: 'list'
    ,
    component: GetlistPaymentMethodComponent
  },
  {
    path: 'show/:id',
    component: ShowPaymentMethodComponent
  },
  {
    path: 'edit/:id',
    component: EditPaymentMethodComponent
  }
  , {
    path: 'add'
    , component: AddPaymentMethodComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodRoutingModule { }
