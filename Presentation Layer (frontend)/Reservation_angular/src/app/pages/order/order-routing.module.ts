import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { GetlistOrderComponent } from './getlist-order/getlist-order.component';
import { ShowOrderComponent } from './show-order/show-order.component';

const routes: Routes = [

  {
    path:'list'
    ,
    component:GetlistOrderComponent
  }

,
  {
path:'show/:id',
component :ShowOrderComponent
  }
 ,
 {
   path:'edit/:id'
,
component:EditOrderComponent
   }
   ,
  {
path:'add'
,component:AddOrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
