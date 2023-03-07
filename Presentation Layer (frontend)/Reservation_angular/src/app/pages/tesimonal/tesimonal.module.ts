import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesimonalRoutingModule } from './tesimonal-routing.module';
import { AddTestimonailComponent } from './add-testimonail/add-testimonail.component';
import { EditTestimonailComponent } from './edit-testimonail/edit-testimonail.component';
import { ShowTestimonailComponent } from './show-testimonail/show-testimonail.component';
import { GetlistTestimonailComponent } from './getlist-testimonail/getlist-testimonail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddTestimonailComponent,
    EditTestimonailComponent,
    ShowTestimonailComponent,
    GetlistTestimonailComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    TesimonalRoutingModule
  ]
})
export class TesimonalModule { }
