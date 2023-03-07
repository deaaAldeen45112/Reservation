import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/service/basicOrder.service';
import { Basicorder } from 'src/data/basicOrder';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  insertOrder= new FormGroup({
    accessStatus: new FormControl(),
    paymentStatus:new FormControl(),
    waiterId:new FormControl(),
    customerId:new FormControl(),
  });
  constructor(private orderService :OrderService) { }
  InsertOrder(){
 let order: Basicorder=new Basicorder();

 order.Access_Status=this.insertOrder.controls['accessStatus'].value;
 order.Payment_Status=this.insertOrder.controls['paymentStatus'].value;
 order.Customer_Id=Number.parseInt(this.insertOrder.controls['customerId'].value);
 order.Waiter_Id= Number.parseInt( this.insertOrder.controls['waiterId'].value);
    console.log(order.Access_Status);
  this.orderService.InsertOrder(order).subscribe(res=>{console.log(res)});
  }
  ngOnInit(): void {
  }

}
