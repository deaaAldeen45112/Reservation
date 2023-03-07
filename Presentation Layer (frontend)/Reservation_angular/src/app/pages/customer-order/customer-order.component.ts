import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from 'src/app/service/basicOrder.service';
import { WaiterService } from 'src/app/service/waiter.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  list:any[]=[];

  listAvaWaiter:any[]=[];
  defaultSelected = 2
  selection: number=0;
  orderId=new FormControl();
    

  from=new FormControl();
  to =new FormControl();
  
   constructor(private orderService:OrderService) { }
 
   GetOrderByCustomerId(){

  let customerId=localStorage.getItem('customer_id')
  console.log(customerId)
    if(customerId!=null){
    this.orderService.GetOrderByCustomerId(Number.parseInt(customerId)).
    subscribe(res=>console.log(this.list=res));
   }}
   
   ngOnInit(): void {
     this.GetOrderByCustomerId();
     
   }

   
  


}