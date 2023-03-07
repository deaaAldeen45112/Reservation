import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AboutUsService } from 'src/app/service/about-us.service';



@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsArr?: any = [];
  constructor(private AboutusService: AboutUsService, public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAboutUs();
  }
  getAboutUs() {
    this.spinner.show();
    this.AboutusService.GetAboutUs().subscribe(
      result => {
        this.aboutUsArr = result;
        console.log(this.aboutUsArr);
        this.spinner.hide();
      });
  }
}
