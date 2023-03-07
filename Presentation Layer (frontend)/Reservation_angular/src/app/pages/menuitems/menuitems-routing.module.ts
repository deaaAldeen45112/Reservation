import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuitemComponent } from './add-menuitem/add-menuitem.component';
import { EditMenuitemComponent } from './edit-menuitem/edit-menuitem.component';
import { GetlistMenuitemComponent } from './getlist-menuitem/getlist-menuitem.component';
import { ShowMenuitemComponent } from './show-menuitem/show-menuitem.component';

const routes: Routes = [
  {
    path:'list'
    ,
    component:GetlistMenuitemComponent
  }

,
  {
path:'show/:id',
component :ShowMenuitemComponent
  }
 ,
 {
   path:'edit/:id'
,
component: EditMenuitemComponent
   }
   ,
  {
path:'add'
,component:AddMenuitemComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuitemsRoutingModule { }
