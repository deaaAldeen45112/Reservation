import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { TableModule } from "src/app/pages/table/table.module";

import { AboutUsModule } from "src/app/pages/about-us/about-us.module";
import { ContactUsModule } from "src/app/pages/contact-us/contact-us.module";
import { IndexModule } from "src/app/pages/index/index.module";
import { CustomerModule } from "src/app/pages/customer/customer.module";
import { WiaterDashbordComponent } from "src/app/pages/wiater-dashbord/wiater-dashbord.component";
import { CustomerDashbordComponent } from "src/app/pages/customer-dashbord/customer-dashbord.component";

import { ProfileComponent } from "src/app/pages/profile/profile.component";
import { GetlistTestimonailComponent } from "src/app/pages/tesimonal/getlist-testimonail/getlist-testimonail.component";
import { AddTestimonailComponent } from "src/app/pages/tesimonal/add-testimonail/add-testimonail.component";
import { CustomerOrderComponent } from "src/app/pages/customer-order/customer-order.component";
import { ReservationNowComponent } from "src/app/pages/reservation-now/reservation-now.component";



export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: 'categories',
    loadChildren: () => import('../../pages/menu-category/menu-category.module').then(m => m.MenuCategoryModule)
  },
  {
    path: 'Discount',
    loadChildren: () => import('../../pages/menuitem-discount/menuitem-discount.module').then(m => m.MenuitemDiscountModule)
  },
  {
    path: 'MenuItem',
    loadChildren: () => import('../../pages/menuitems/menuitems.module').then(m => m.MenuitemsModule)
  },
  {

    path: 'payment',
    loadChildren: () => import('../../pages/payment/payment.module').then(m => m.PaymentModule)

  },
  {

    path: 'paymentMethodes',
    loadChildren: () => import('../../pages/payment-method/payment-method.module').then(m => m.PaymentMethodModule)

  },
  {

    path: 'roles',
    loadChildren: () => import('../../pages/role/role.module').then(m => m.RoleModule)

  },
  {

    path: 'Employee',
    loadChildren: () => import('../../pages/emp/emp.module').then(m => m.EmpModule)

  },
  {

    path: 'Orders',
    loadChildren: () => import('../../pages/order/order.module').then(m => m.OrderModule)

  },
  {

    path: 'Image',
    loadChildren: () => import('../../pages/sysimage/sysimage.module').then(m => m.SysimageModule)

  }
  ,
  {
    path: 'Tables',
    loadChildren: () => TableModule
  },

  {

    path: 'ContactUsInfo',
    loadChildren: () => import('../../pages/contactusinfo/contactusinfo.module').then(m => m.ContactusinfoModule)

  }
  ,
  {

    path: 'reservations',
    loadChildren: () => import('../../pages/reservations/reservations.module').then(m => m.ReservationsModule)

  },
  {
    path: 'about',
    loadChildren: () => AboutUsModule
  },
  {
    path:'contact',
    loadChildren:()=>ContactUsModule
  },
  {
    path:"index",
    loadChildren:()=>IndexModule
  },
  {
    path:"customer",
    loadChildren:()=>CustomerModule
  },
  {

    path: 'tasks',
    loadChildren: () => import('../../pages/waiter/waiter.module').then(m =>m.WaiterModule)
  
  },
  {
    path:'waiterdashbord'
    ,
    component:WiaterDashbordComponent

  }
,{

  path:'customerdashbord'
  ,
  component:CustomerDashbordComponent
}  
,
{

path:'profile'
,
component:ProfileComponent

},
{

  path:'reservationNow'
  ,
  component:ReservationNowComponent
  
  }

,{

path:'testimonal',
component:GetlistTestimonailComponent

}
,
{
path:'addTestimonal'
,
component:AddTestimonailComponent


}
,

{
path:'order',
component:CustomerOrderComponent
}

];
