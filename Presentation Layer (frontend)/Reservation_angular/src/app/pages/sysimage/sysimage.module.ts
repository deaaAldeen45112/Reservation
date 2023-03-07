import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysimageRoutingModule } from './sysimage-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SysimageComponent } from 'src/app/pages/sysimage/sysimage.component';


@NgModule({
  declarations: [
    SysimageComponent
  ],
  imports: [
    CommonModule,
    SysimageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule 
  ]
})
export class SysimageModule { }
