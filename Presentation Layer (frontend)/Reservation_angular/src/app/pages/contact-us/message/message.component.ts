import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
contactUs:any=[];
  constructor( private toastr: ToastrService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.contactUs = param;  
    });
    console.log(this.contactUs);
  }
  backToList()
  {
    this.router.navigate(['../contactUs'], { relativeTo: this.route }); 
  }
}
