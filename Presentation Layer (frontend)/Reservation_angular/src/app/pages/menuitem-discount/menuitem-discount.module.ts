import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuitemDiscountRoutingModule } from './menuitem-discount-routing.module';
import { AddMenuitemDiscountComponent } from './add-menuitem-discount/add-menuitem-discount.component';
import { EditMenuitemDiscountComponent } from './edit-menuitem-discount/edit-menuitem-discount.component';
import { GetlistMenuitemDiscountComponent } from './getlist-menuitem-discount/getlist-menuitem-discount.component';
import { ShowMenuitemDiscountComponent } from './show-menuitem-discount/show-menuitem-discount.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddMenuitemDiscountComponent,
    EditMenuitemDiscountComponent,
    GetlistMenuitemDiscountComponent,
    ShowMenuitemDiscountComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    
    MenuitemDiscountRoutingModule
  ]
})
export class MenuitemDiscountModule { }
