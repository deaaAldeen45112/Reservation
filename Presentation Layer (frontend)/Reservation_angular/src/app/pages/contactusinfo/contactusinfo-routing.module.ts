import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusinfoComponent } from './contactusinfo.component';

const routes: Routes = [
  {
    path:'contactUsInfo',
    component:ContactusinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusinfoRoutingModule { }
