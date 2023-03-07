import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { GetlistRoleComponent } from './getlist-role/getlist-role.component';
import { ShowRoleComponent } from './show-role/show-role.component';

const routes: Routes = [

  {
    path: 'list'
    ,
    component: GetlistRoleComponent
  },
  {
    path: 'show/:id',
    component: ShowRoleComponent
  },
  {
    path: 'edit/:id',
    component: EditRoleComponent
  }
  , {
    path: 'add'
    , component :AddRoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
