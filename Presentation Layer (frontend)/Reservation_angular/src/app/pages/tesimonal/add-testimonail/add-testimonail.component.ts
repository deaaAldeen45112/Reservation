import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TestimonialService } from 'src/app/service/testimonal.service';
import { Testimonial } from 'src/data/testimonial';

@Component({
  selector: 'app-add-testimonail',
  templateUrl: './add-testimonail.component.html',
  styleUrls: ['./add-testimonail.component.css']
})
export class AddTestimonailComponent implements OnInit {
  insertTestimonial= new FormGroup({
    testimonialMessage:new FormControl(),
    
  });
  constructor(private testimoialService :TestimonialService,private toast:ToastrService) { }
  InsertTestimonial(){
 let  testimonail: Testimonial=new Testimonial();
 let customerId=localStorage.getItem('customer_id');
if(customerId!=null)
{
 testimonail.Testimonial_Message=this.insertTestimonial.controls['testimonialMessage'].value;
 testimonail.Customer_Id=Number.parseInt(customerId);
 this.testimoialService.InsertTestimonial(testimonail).subscribe(res=>{console.log(res)

this.toast.success("Thank You To Messege");
});
  }  


}
  ngOnInit(): void {

  }

}
