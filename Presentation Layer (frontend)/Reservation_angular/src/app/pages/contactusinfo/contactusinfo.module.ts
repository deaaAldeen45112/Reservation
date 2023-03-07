import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { ContactusinfoComponent } from './contactusinfo.component';
import { ContactusinfoRoutingModule } from './contactusinfo-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [ContactusinfoComponent],
  imports: [
    CommonModule,
    ContactusinfoRoutingModule,
    MatInputModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers:[ToastrService]
})
export class ContactusinfoModule { }
