import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterLayoutRoutingModule } from './waiter-layout-routing.module';
import { WaiterLayoutComponent } from './waiter-layout.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    WaiterLayoutRoutingModule
  ]
})
export class WaiterLayoutModule { }
