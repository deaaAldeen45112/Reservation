import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysimageComponent } from './sysimage.component';

const routes: Routes = [

{

  path:'list',
  component:SysimageComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysimageRoutingModule { }
