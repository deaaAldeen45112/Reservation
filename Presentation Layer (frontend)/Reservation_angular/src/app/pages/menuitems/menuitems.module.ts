import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuitemsRoutingModule } from './menuitems-routing.module';
import { AddMenuitemComponent } from './add-menuitem/add-menuitem.component';
import { EditMenuitemComponent } from './edit-menuitem/edit-menuitem.component';
import { ShowMenuitemComponent } from './show-menuitem/show-menuitem.component';
import { GetlistMenuitemComponent } from './getlist-menuitem/getlist-menuitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {NgbModule,NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AddMenuitemComponent,
    EditMenuitemComponent,
    ShowMenuitemComponent,
    GetlistMenuitemComponent
  ],
  imports: [
    
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    NgxSpinnerModule,
    MatListModule,
    NgbModule,
    MatRadioModule,
    MenuitemsRoutingModule,
    MatCardModule
  ]
})
export class MenuitemsModule { }
