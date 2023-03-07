import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { IndexComponent } from './home/index/index.component';
import { ReservationModule } from './home/reservation/reservation.module';
import { TestimonalDisplayComponent } from './home/testimonal-display/testimonal-display.component';

import { AdminLayoutComponent } from './layouts copy/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'reservation',
    loadChildren: () => ReservationModule
  },

  {
    path: 'menu',
    loadChildren: () => import('../app/home/menu/menu.module').then(m => m.MenuModule)
  }
  ,
  {
    path: 'cart',
    loadChildren: () => import('../app/home/cart/cart.module').then(m => m.CartModule)
  }
,
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'security',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  }
  ,
{
  path: "Dashbord",
  component: AdminLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () => import ("./layouts copy/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
    }
  ]
}


,
{
  path: "testimonal",
  component:TestimonalDisplayComponent,
 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
