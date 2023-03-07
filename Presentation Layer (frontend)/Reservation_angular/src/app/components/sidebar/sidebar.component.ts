import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export let ROUTES: RouteInfo[] = []
export const AdminROUTES: RouteInfo[] = [
  {
    path: "./dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./Tables/GetTable",
    title: "Resturant Tables",
    rtlTitle: "طاولات المطعم",
    icon: "icon-app",
    class: ""
  },
  {
    path: "./reservations/GetReservations",
    title: "Reservations",
    rtlTitle: "",
    icon: "icon-book-bookmark",
    class: ""
  },
  {
    path: './about/aboutUs',
    title: "AboutUs",
    rtlTitle: "",
    icon: "icon-paper",
    class: ""
  },
  {
    path: "./ContactUsInfo/contactUsInfo",
    title: "Contact Us Information",
    rtlTitle: "",
    icon: "icon-mobile",
    class: ""
  },
  {
    path: "./customer/list",
    title: "Customers",
    rtlTitle: "",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/Image/resturantImage",
    title: "Images",
    rtlTitle: "",
    icon: "icon-image-02",
    class: ""
  },
  {
    path: "./contact/contactUs",
    title: "ContactUs",
    rtlTitle: "",
    icon: "icon-email-85",
    class: ""
  },
  {
    path: "./Employee/list",
    title: "Employees",
    rtlTitle: "",
    icon: "icon-tie-bow",
    class: ""
  },
  {
    path: "./index/edit",
    title: "Index",
    rtlTitle: "",
    icon: "icon-components",
    class: ""
  },
  {
    path: "./testimonal",
    title: "Testimonal",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./categories/list",
    title: "Categories",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./Discount/list",
    title: "Discount",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  
  {
    path: "./MenuItem/list",
    title: "MenuItem",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./payment/list",
    title: "Payment",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./paymentMethodes/list",
    title: "PaymentMethodes",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./roles/list",
    title: "Roles",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./Orders/list",
    title: "Order",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: ""
  },

  {
    path: "./profile",
    title: "Profile",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  }
];
export const CustomerROUTES: RouteInfo[] = [
  {
    path: "./customerdashbord",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  }
 ,
 {
  path: "./addTestimonal",
  title: "Testimonal",
  rtlTitle: "لوحة القيادة",
  icon: "icon-chart-pie-36",
  class: ""
},
{
  path: "./order",
  title: "orders",
  rtlTitle: "لوحة القيادة",
  icon: "icon-chart-pie-36",
  class: ""
},
{
  path: "./reservationNow",
  title: "Reservation now",
  rtlTitle: "لوحة القيادة",
  icon: "icon-chart-pie-36",
  class: ""
},
  {
    path: "./profile",
    title: "Profile",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  }
];
export const WaiterROUTES: RouteInfo[] = [
  {
    path: "./waiterdashbord",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  
  {
    path: "./tasks/list",
    title: "Tasks",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "./profile",
    title: "Profile",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  }
];
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  userRole: number = 3;
  constructor() { }

  ngOnInit() {
    this.userType();
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  userType() {
    
    let roleId = (localStorage.getItem('role_id'));
    if (roleId != null) {
      switch (roleId) {
        case "0": //Customer
          ROUTES = CustomerROUTES;
          this.menuItems = CustomerROUTES.filter(menuItem => menuItem);
          break;

        case "1"://Admin
          ROUTES = AdminROUTES;
          this.menuItems = AdminROUTES.filter(menuItem => menuItem);
          break;

        case "2"://Waiter
          ROUTES = WaiterROUTES;
          this.menuItems = WaiterROUTES.filter(menuItem => menuItem);
          break;
      }
    }
  }
}


/*},
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
,{

path:'profile'
,
component:ProfileComponent

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
}*/