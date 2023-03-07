import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentMethodRoutingModule } from './payment-method-routing.module';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { GetlistPaymentMethodComponent } from './getlist-payment-method/getlist-payment-method.component';
import { ShowPaymentMethodComponent } from './show-payment-method/show-payment-method.component';
import { EditPaymentMethodComponent } from './edit-payment-method/edit-payment-method.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AddPaymentMethodComponent,
    GetlistPaymentMethodComponent,
    ShowPaymentMethodComponent,
    EditPaymentMethodComponent
  ],
  imports: [
    CommonModule,
    PaymentMethodRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,   
  ]
})
export class PaymentMethodModule { }
