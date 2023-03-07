import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { GetReservationsComponent } from './get-reservations/get-reservations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationsReportComponent } from './reservations-report/reservations-report.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    GetReservationsComponent,
    ReservationsReportComponent
  ],
  imports: [
    ReservationsRoutingModule,
    CommonModule,
    MatDialogModule,
    FormsModule
    
  ],
  exports:[
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  entryComponents:[ReservationsReportComponent]
  
})
export class ReservationsModule { }
