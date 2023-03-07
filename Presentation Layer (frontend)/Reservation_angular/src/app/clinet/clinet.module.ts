import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinetRoutingModule } from './clinet-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClinetRoutingModule
  ]
})
export class ClinetModule { }
