import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { AddEmComponent } from './add-em/add-em.component';
import { EditEmComponent } from './edit-em/edit-em.component';
import { GetlistEmComponent } from './getlist-em/getlist-em.component';
import { ShowEmComponent } from './show-em/show-em.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AddEmComponent,
    EditEmComponent,
    GetlistEmComponent,
    ShowEmComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class EmpModule { }
