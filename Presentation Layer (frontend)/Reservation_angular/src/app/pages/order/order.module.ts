import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { GetlistOrderComponent } from './getlist-order/getlist-order.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerNavigation } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation';
import {MatDateRangePicker,MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AddOrderComponent,
    
    EditOrderComponent,
    GetlistOrderComponent,
    ShowOrderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatNativeDateModule,
    MatDatepickerModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
