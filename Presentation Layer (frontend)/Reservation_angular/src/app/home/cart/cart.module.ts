import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ListCartComponent } from './list-cart/list-cart.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ListCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    NgxSpinnerModule,
    MatRadioModule,
    

    MatCardModule
  ]
})
export class CartModule { }
