import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContactusInfoService } from 'src/app/service/contactus-info.service';
import { IndexService } from 'src/app/service/index.service';


declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  class: string;
}
export let ROUTES: RouteInfo[] = []
export const GuestROUTES: RouteInfo[] = [
  {
    path: "./",
    title: "Home",
    rtlTitle: "",
    class: ""
  },
  {
    path: "./aboutus",
    title: "About Us",
    rtlTitle: "لوحة القيادة",
    class: ""
  },
  {
    path: "./contactus",
    title: "Contact Us",
    rtlTitle: "",
    class: ""
  }

 ,
 {
  path: "./testimonal",
  title: "Testimonal",
  rtlTitle: "",
  class: ""
},
  {
    path: './menu/getlist',
    title: "Menu",
    rtlTitle: "",

    class: ""
  }
];
export const CustomerROUTES: RouteInfo[] = [
  {
    path: "./",
    title: "Home",
    rtlTitle: "",
    class: ""
  },
  {
    path: "./aboutus",
    title: "About Us",
    rtlTitle: "لوحة القيادة",
    class: ""
  },
  {
    path: "./contactus",
    title: "Contact Us",
    rtlTitle: "طاولات المطعم",
    class: ""
  }
 ,
 {
  path: "./testimonal",
  title: "Testimonal",
  rtlTitle: "",
  class: ""
},
  {
    path: './menu/getlist',
    title: "Menu",
    rtlTitle: "",

    class: ""
  },
  
  {
    path: './cart/getlist',
    title: "Cart",
    rtlTitle: "",
 
    class: ""
  },  
  {
    path: './Dashbord/customerdashbord',
    title: "Dashbord",
    rtlTitle: "",

    class: ""}
];
export const WaiterROUTES: RouteInfo[] = [
  {
    path: "./",
    title: "Home",
    rtlTitle: "",
    class: ""
  },
  {
    path: "./aboutus",
    title: "About Us",
    rtlTitle: "لوحة القيادة",
    class: ""
  },
  {
    path: "./contactus",
    title: "Contact Us",
    rtlTitle: "طاولات المطعم",
    class: ""
  },
  {
    path: "./testimonal",
    title: "Testimonal",
    rtlTitle: "",
    class: ""
  },
 

  {
    path: './menu/getlist',
    title: "Menu",
    rtlTitle: "",

    class: ""
  },
  {
    path: './Dashbord/waiterdashbord',
    title: "Dashbord",
    rtlTitle: "",

    class: ""}
];
export const AdminROUTES: RouteInfo[] = [
  {
    path: "./",
    title: "Home",
    rtlTitle: "",
    class: ""
  },
  {
    path: "./aboutus",
    title: "About Us",
    rtlTitle: "لوحة القيادة",
    class: ""
  },
  {
    path: "./contactus",
    title: "Contact Us",
    rtlTitle: "طاولات المطعم",
    class: ""
  },
  {
    path: "./testimonal",
    title: "Testimonal",
    rtlTitle: "",
    class: ""
  },
 

  {
    path: './menu/getlist',
    title: "Menu",
    rtlTitle: "",

    class: ""
  },
  {
    path: './Dashbord/dashboard',
    title: "Dashbord",
    rtlTitle: "",

    class: ""}
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  menuItems: any[] = [];
  userRole: number = 3;
 
  headerArr: any = [];
  contactInfo: any = [];
  constructor(private elementRef: ElementRef, private indexService: IndexService, private rou:ActivatedRoute,private router: Router, private contactUsInfo: ContactusInfoService) { }
  userType() {
    
    //let roleId = (localStorage.getItem('roleId'));
   let  roleId=localStorage.getItem('role_id');
console.log(roleId)
    if (roleId != null) {
      this.userRole=Number.parseInt(roleId);

      switch (roleId) {
        case "0": //Customer
          ROUTES = CustomerROUTES;
          this.menuItems = CustomerROUTES.filter(menuItem => menuItem);
          break;

          case "1" :
            ROUTES = AdminROUTES;
            this.menuItems = AdminROUTES.filter(menuItem => menuItem);
           break;  
          case "2" :
            ROUTES =  WaiterROUTES;
            this.menuItems = WaiterROUTES.filter(menuItem => menuItem);
          break;
         default:
          break;

      }
    }
    else {  

      ROUTES = GuestROUTES;
      this.menuItems = GuestROUTES.filter(menuItem => menuItem);
   
     }
  }
  dis:boolean=window.location.href.includes("Dashbord")!=true;
  ngOnInit(): void {
   
    var minutesToAdd=0;
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
console.log(futureDate.toLocaleString())
      console.log(this.router.url);
     
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = '#000';
    this.getHeader();
    this.getContactUsInfo();
    this.userType();
  }
  getHeader() {
    this.indexService.GetHeader().subscribe(
      result => {
        this.headerArr = result;
      }
    );
  }
  getContactUsInfo() {
    this.contactUsInfo.getContactUsInfo().subscribe(
      result => {
        this.contactInfo = result;

      }
    );

  }


  f(){

    

  }
  
 
  Logout() {
   localStorage.clear();
   this.router.navigate(['./']);
  }
  
}
