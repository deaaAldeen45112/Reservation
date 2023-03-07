import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AboutUsService } from 'src/app/service/about-us.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AboutUsClass } from 'src/app/shared/about-us-class.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  aboutUsArr?: any = [];
  constructor(private AboutusService: AboutUsService,  public spinner: NgxSpinnerService,
    private route: ActivatedRoute,private toastr: ToastrService , private router :Router) { }
  
  ngOnInit(): void {
  this.getAboutUs(); 
  }
  getAboutUs()
  {
    this.spinner.show();
    this.AboutusService.GetAboutUs().subscribe(
      (result) => {
         this.aboutUsArr = result ;
         this.spinner.hide();
        }
      );
  }
  UpdateAboutUs(aboutUs: string) {
    this.spinner.show();
    const obj: AboutUsClass = {
      id: this.aboutUsArr[0].id,
      about_Us_Body: aboutUs
    }
    this.AboutusService.UpdateAboutUs(obj).subscribe(
      (result)=>{
        this.toastr.success('Updated succefully');
      this.spinner.hide();
      this. backToList();
    }
    );
    
  }
  backToList() {
    this.router.navigate(['../../dashboard'], { relativeTo: this.route });
  }
}
