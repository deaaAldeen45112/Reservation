import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashbordComponent } from 'src/app/pages/customer-dashbord/customer-dashbord.component';
import { CustomerOrderComponent } from 'src/app/pages/customer-order/customer-order.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

const routes: Routes = [
  {

    path: 'Testimonal',
    loadChildren: () => import('../../pages/tesimonal/tesimonal.module').then(m =>m.TesimonalModule)
  
  }
,
{

  path: 'dashbord',
  component:CustomerDashbordComponent
}
,
{
path :'profile',
component:ProfileComponent

}
,{
  path :'orders',
  component:CustomerOrderComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLayoutRoutingModule { }
