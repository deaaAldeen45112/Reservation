import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule
  ]
})
export class CustomerLayoutModule { }
