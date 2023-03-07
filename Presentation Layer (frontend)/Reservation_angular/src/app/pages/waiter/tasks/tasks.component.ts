import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from 'src/app/service/basicOrder.service';
import { orderItemService } from 'src/app/service/orderItem.service';
import { PaymentService } from 'src/app/service/payment.service';
import { WaiterService } from 'src/app/service/waiter.service';
import { Payment } from 'src/data/payment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  list:any[]=[];

  listAvaWaiter:any[]=[];

  
   constructor(private orderService:OrderService,
    private waiterService:WaiterService,
    private orderItemService :orderItemService,
    private paymentService:PaymentService) { }
 
   
     // sort about id and waiter id ==null all order  assign waiter

  GetOrderByWaiterId(waiterId:number){
      this.orderService.GetOrderByWaiterId(waiterId).subscribe(res=>{console.log(res)
      
      this.list=res;
      
      })
   }
   ngOnInit(): void {
    let waiterId=localStorage.getItem('waiter_id');
    if(waiterId!=null)
    {
    this.GetOrderByWaiterId(Number.parseInt(waiterId));
    }
   }
   UpdateAccessStatusByOrderId(orderId:number,accessStatus:string){


    if(accessStatus=='no')
    this.orderService.UpdateAccessStatusByOrderId(orderId,"yes").subscribe(res=>{
      console.log(res)
       let waiterId=localStorage.getItem('waiter_id');
       if(waiterId!=null)
       {
        this.GetOrderByWaiterId(Number.parseInt(waiterId));
       }
    });
   }
   UpdatePaymentStatusByOrderId(order:any){
     
    if(order.payment_Status=='no')
    this.orderService.UpdatePaymentStatusByOrderId(order.order_Id,"yes").subscribe(res=>{
      console.log(res)
      let waiterId=localStorage.getItem('waiter_id');
      if(waiterId!=null){
      this.GetOrderByWaiterId(36);}
      let payment=new Payment();
      let price;
      payment.Order_Id=order.order_Id;
      payment.Payment_Method_Id=21;
      payment.Payment_Currncy="Jordan";
      payment.Payment_Price=order.order_price;
      payment.Credit_Id=null;

      this.paymentService.InsertPayment(payment).subscribe(res=>console.log(res))
    });
   }
/*   GetOrderItemByOrderId(orderId:number){

    this.orderItemService.GetOrderItemByOrderId(orderId).subscribe(res=>{

    console.log(res);
    this.orderItems=res;
    this.InsertPayment(orderId);

    });
   }

InsertPayment(orderId:number) 
{
let payment:Payment=new Payment();
payment.Payment_Price=this.totalPrice();
payment.Payment_Currncy="Jordan";
payment.Payment_Method_Id=2;
payment.Order_Id=orderId;
console.log(orderId+"  ")
payment.Credit_Id=null;
this.paymentService.InsertPayment(payment).subscribe(res=>{

console.log(res)

});

}
orderItems:any[]=[];
totalPrice(){

  let totalPrice=0;
  this.orderItems.forEach(element => {
  totalPrice+=element.order_Item_Price*element.order_Item_Quantity;
 
  });

  console.log("totalprice="+totalPrice);
  return totalPrice;
}
  
   
}
*/}