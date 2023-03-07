import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers:[ToastrService]
})
export class AboutUsModule { }
