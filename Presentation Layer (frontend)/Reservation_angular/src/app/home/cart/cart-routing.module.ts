import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartComponent } from './list-cart/list-cart.component';

const routes: Routes = [

{
  path:'getlist'
  ,
  component:ListCartComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
