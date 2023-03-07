import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetContactusComponent } from './get-contactus/get-contactus.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path:"contactUs",
    component:GetContactusComponent
  },
  {
    path:"message",
    component:MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
