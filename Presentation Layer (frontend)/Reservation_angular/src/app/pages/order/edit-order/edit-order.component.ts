import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/basicOrder.service';
import { Basicorder } from 'src/data/basicOrder';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  list:any;
  editId:number=-1;
    constructor(private  orderservice:OrderService,private route:ActivatedRoute) { }
  
    editOrder= new FormGroup({
      accessStatus: new FormControl(),
      paymentStatus:new FormControl(),
      waiterId:new FormControl(),
      customerId:new FormControl(),
    });
    UpdateOrder(){  
    let order: Basicorder=new Basicorder();
    order.Order_Id=this.list.order_Id;
    order.Access_Status=this.editOrder.controls['accessStatus'].value;
    order.Payment_Status=this.editOrder.controls['paymentStatus'].value;
    order.Customer_Id=this.editOrder.controls['customerId'].value;
    order.Waiter_Id=this.editOrder.controls['waiterId'].value;
      console.log(order.Order_Id)
  //menuCategory.Menu_Category_Parent_Id=Number.parseInt(this.editMenuCategory.controls['parentId'].value);*/
      console.log('deaa');
  this.orderservice.UpdateOrder(order).subscribe((res)=>{console.log(res)});   
  
  }
  GetOrderById(orderId:number){
    this.orderservice.GetOrderById(orderId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
    }
  
  ngOnInit(): void {
  
  this.route.params.subscribe(res=>{
   this.editId= res['id'];
  this.GetOrderById(this.editId);
  });
  }
  
}
