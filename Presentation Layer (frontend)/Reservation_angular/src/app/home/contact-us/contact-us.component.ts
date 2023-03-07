import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer} from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContactUsServiceService } from 'src/app/service/contact-us-service.service';
import { ContactusInfoService } from 'src/app/service/contactus-info.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  contactUsInfoArr?:any=[];
  status?:boolean;
  ContactUsForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    subject:new FormControl('', Validators.required),
    message:new FormControl('', Validators.required)
  });
  constructor(private contactUsService:ContactUsServiceService,private contactUsInfo :ContactusInfoService,private spinner: NgxSpinnerService,private toast:ToastrService) 
  {
  }

  ngOnInit(): void {
   this.getContactUs();
  }
  getContactUs()
  {
    this.spinner.show();
    this.contactUsInfo.getContactUsInfo().subscribe(
      (result:any)=>{this.contactUsInfoArr=result
        console.log(result);
        this.spinner.hide();
      }
  ); 
  }
  SendContactUs()
  {
    let obj :any= {
    name:  this.ContactUsForm.value.name.toString(),
    email: this.ContactUsForm.value.email.toString(),
    phone: this.ContactUsForm.value.phone.toString(),
    subject:this.ContactUsForm.value.subject.toString(),
    message:this.ContactUsForm.value.message.toString(),
    }
    this.contactUsService.AddContactUs(obj).subscribe(res=>{
      console.log(res);
      this.toast.success("Thank You To Your Messege");
    });
   
  }

}
