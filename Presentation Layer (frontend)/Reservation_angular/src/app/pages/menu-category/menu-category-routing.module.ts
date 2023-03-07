import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuCategoryComponent } from './add-menu-category/add-menu-category.component';
import { EditMenuCategoryComponent } from './edit-menu-category/edit-menu-category.component';
import { GetlistMenuCategoryComponent } from './getlist-menu-category/getlist-menu-category.component';
import { ShowMenuCategoryComponent } from './show-menu-category/show-menu-category.component';

const routes: Routes = [
  {
    path:'list'
    ,
    component:GetlistMenuCategoryComponent
  }

,
  {
path:'show/:id',
component :ShowMenuCategoryComponent
  }
 ,
 {
   path:'edit/:id'
,
component:EditMenuCategoryComponent
   }
   ,
  {
path:'add'
,component:AddMenuCategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCategoryRoutingModule { }
