import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCustomersComponent } from './get-customers/get-customers.component';

const routes: Routes = [
  {
    path:"list",
    component:GetCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
