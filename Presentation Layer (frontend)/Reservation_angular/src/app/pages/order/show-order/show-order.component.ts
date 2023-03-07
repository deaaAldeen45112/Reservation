import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/basicOrder.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private orderService:OrderService) { }
 
 GetOrderById(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.orderService.GetOrderById(this.editId).subscribe((res:any[])=>{
 this.item=res[0];
 console.log(this.item)
 })
  console.log(this.editId)

 })

}


 ngOnInit(): void {
this.GetOrderById();    
 }
}
