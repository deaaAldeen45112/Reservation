import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMenuItemComponent } from './list-menu-item/list-menu-item.component';
import { ShowMenuItemComponent } from './show-menu-item/show-menu-item.component';

const routes: Routes = [

  {

    path: 'getlist',
   component:ListMenuItemComponent
  },
  
  {

    path:'show/:id',
   component:ShowMenuItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
