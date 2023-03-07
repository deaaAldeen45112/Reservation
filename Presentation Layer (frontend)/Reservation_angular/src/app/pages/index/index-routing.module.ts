import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateIndexComponent } from './update-index/update-index.component';

const routes: Routes = [
  {
    path:"edit",
    component:UpdateIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
