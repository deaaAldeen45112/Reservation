import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';

import {MatCardModule} from '@angular/material/card';
import { TablesComponent } from './tables/tables.component';
import { TablesCardsComponent } from './tables/tables-cards/tables-cards.component';
import { TableDialogComponent } from './tables/table-dialog/table-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReserveDialogComponent } from './tables/reserve-dialog/reserve-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    TablesComponent,
    TablesCardsComponent,
    TableDialogComponent,
    ReserveDialogComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule ,
    DateTimePickerModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    
  ],
  exports:[ CommonModule,
    ReservationRoutingModule,
    MatCardModule,
    MatDialogModule,
    
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    TablesCardsComponent,
    NgxSpinnerModule
  ],
  entryComponents:[TableDialogComponent,ReserveDialogComponent],
  providers:[ToastrService]
})
export class ReservationModule { }
