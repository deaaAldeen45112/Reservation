import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { GetContactusComponent } from './get-contactus/get-contactus.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    GetContactusComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  providers:[ToastrService]
})
export class ContactUsModule { }
