import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactusInfoService } from 'src/app/service/contactus-info.service';
import { IndexService } from 'src/app/service/index.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerArr: any = []
  contactInfoArr: any = []
  constructor(private indexService: IndexService, private contactUsInfo: ContactusInfoService,public router:Router) { }

      


  dis:boolean=true;
  ngOnInit(): void {


    console.log(window.location.href.includes("Dashbord"));
  
    if(window.location.href.includes("Dashbord")==true)
    {
  this.dis=false;

    }

    this.indexService.GetFooterH().subscribe(
      result => {
        this.footerArr = result
      }
    );
    this.contactUsInfo.getContactUsInfo().subscribe(
      result => {
        this.contactInfoArr = result
      }
    );
  }
  Home() {
    this.router.navigate(['']);
  }
  AboutUs() {
    this.router.navigate(['aboutus']);
  }
}
