import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/service/testimonal.service';

@Component({
  selector: 'app-getlist-testimonail',
  templateUrl: './getlist-testimonail.component.html',
  styleUrls: ['./getlist-testimonail.component.css']
})
export class GetlistTestimonailComponent implements OnInit {

  list:any[]=[];
   constructor(private tesimonialService:TestimonialService) { }
 
   ngOnInit(): void {
     this.GetTestimonials();
   }
 
   search(){
  
 
   }
  
 GetTestimonials(){
   
   this.tesimonialService.GetTestimonials().subscribe((res:any[])=>{console.log(res);  this.list=res;})
   }

  
}
