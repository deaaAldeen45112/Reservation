import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactUsServiceService } from 'src/app/service/contact-us-service.service';

@Component({
  selector: 'app-get-contactus',
  templateUrl: './get-contactus.component.html',
  styleUrls: ['./get-contactus.component.css']
})
export class GetContactusComponent implements OnInit {
  contactUsArr: any = [];
  @Input() subjectFilter: string | undefined | null;
  constructor(private contactusService: ContactUsServiceService, public spinner: NgxSpinnerService,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this.spinner.show();
    this.contactusService.GetAllContactUs().subscribe(
      (result) => {
        this.contactUsArr = result;
        this.spinner.hide();
      }
    )
  }
  Filter(subject: string) {
    
     this.subjectFilter = subject.replace(/\s/g, "");
    this.contactusService.GetContactUsBySubject(this.subjectFilter).subscribe(
      (result) => { this.contactUsArr = result; }
    )
  }
  Clear() {
    this.getContact();
    this.subjectFilter = null;
  }
  view(data: any) {
    this.router.navigate(['../message', data], { relativeTo: this.route, skipLocationChange: true });
  }
}

