import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { GetCustomersComponent } from './get-customers/get-customers.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    GetCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxSpinnerModule,
  ]
})
export class CustomerModule { }
