import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { GetlistRoleComponent } from './getlist-role/getlist-role.component';
import { ShowRoleComponent } from './show-role/show-role.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AddRoleComponent,
    EditRoleComponent,
    GetlistRoleComponent,
    ShowRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule, 
  ]
})
export class RoleModule { }
