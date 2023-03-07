import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { GetlistPaymentComponent } from './getlist-payment/getlist-payment.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { ShowPaymentComponent } from './show-payment/show-payment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    GetlistPaymentComponent,
    AddPaymentComponent,
    EditPaymentComponent,
    ShowPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,   
  ]
})
export class PaymentModule { }
