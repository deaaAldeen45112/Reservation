import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { UpdateIndexComponent } from './update-index/update-index.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateIndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    FormsModule,                            
    ReactiveFormsModule    
  ],
  providers:[ToastrService]
})
export class IndexModule { }
