import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TableRoutingModule } from './table-routing.module';
import { EditTableComponent } from './edit-table/edit-table.component';
import { AddTableComponent } from './add-table/add-table.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetTablesComponent } from './get-tables/get-tables.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    EditTableComponent,
    AddTableComponent,
    GetTablesComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
   
    MatInputModule
  ],
  exports: [NgxSpinnerModule],
  providers:[ToastrService]
})
export class TableModule { }
