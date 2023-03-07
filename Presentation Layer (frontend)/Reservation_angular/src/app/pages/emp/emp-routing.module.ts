import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmComponent } from './add-em/add-em.component';
import { EditEmComponent } from './edit-em/edit-em.component';
import { GetlistEmComponent } from './getlist-em/getlist-em.component';
import { ShowEmComponent } from './show-em/show-em.component';

const routes: Routes = [
  {
    path: 'list'
    ,
    component: GetlistEmComponent
  },
  {
    path: 'show/:id',
    component: ShowEmComponent
  },
  {
    path: 'edit/:id',
    component: EditEmComponent
  }
  , {
    path: 'add'
    , component: AddEmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
