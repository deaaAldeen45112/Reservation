import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {

    path: 'Task',
    loadChildren: () => import('../../pages/waiter/waiter.module').then(m =>m.WaiterModule)
  
  }
,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterLayoutRoutingModule { }
