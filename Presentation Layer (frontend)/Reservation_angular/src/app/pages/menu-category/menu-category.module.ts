import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCategoryRoutingModule } from './menu-category-routing.module';
import { AddMenuCategoryComponent } from './add-menu-category/add-menu-category.component';
import { EditMenuCategoryComponent } from './edit-menu-category/edit-menu-category.component';
import { ShowMenuCategoryComponent } from './show-menu-category/show-menu-category.component';
import { GetlistMenuCategoryComponent } from './getlist-menu-category/getlist-menu-category.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {NgbModule,NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AddMenuCategoryComponent,
    EditMenuCategoryComponent,
    ShowMenuCategoryComponent,
    GetlistMenuCategoryComponent
  ],
  imports: [
    CommonModule,
    MenuCategoryRoutingModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class MenuCategoryModule { }
