import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuitemDiscountComponent } from './add-menuitem-discount/add-menuitem-discount.component';
import { EditMenuitemDiscountComponent } from './edit-menuitem-discount/edit-menuitem-discount.component';
import { GetlistMenuitemDiscountComponent } from './getlist-menuitem-discount/getlist-menuitem-discount.component';
import { ShowMenuitemDiscountComponent } from './show-menuitem-discount/show-menuitem-discount.component';

const routes: Routes = [
  {
    path:'list'
    ,
    component:GetlistMenuitemDiscountComponent
  }

,
  {
path:'show/:id',
component :ShowMenuitemDiscountComponent
  }
 ,
 {
   path:'edit/:id'
,
component:EditMenuitemDiscountComponent
   }
   ,
  {
path:'add'
,component:AddMenuitemDiscountComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuitemDiscountRoutingModule { }
