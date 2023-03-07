import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetReservationsComponent } from './get-reservations/get-reservations.component';

const routes: Routes = [
  {
    path:"GetReservations",
    component:GetReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
