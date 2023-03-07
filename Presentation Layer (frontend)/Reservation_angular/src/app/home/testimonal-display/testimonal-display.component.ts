import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestimonialService } from 'src/app/service/testimonal.service';

@Component({
  selector: 'app-testimonal-display',
  templateUrl: './testimonal-display.component.html',
  styleUrls: ['./testimonal-display.component.css']
})
export class TestimonalDisplayComponent implements OnInit {

  list:any[]=[];
   constructor(private tesimonialService:TestimonialService,private spinner:NgxSpinnerService) { }
 
   ngOnInit(): void {
     this.GetTestimonials();
   }
 
   search(){
  
 
   }
  
 GetTestimonials(){
   this.spinner.show();

   this.tesimonialService.GetTestimonials().subscribe((res:any[])=>{console.log(res);  this.list=res;
  
  this.spinner.hide();
  })
   }

}
