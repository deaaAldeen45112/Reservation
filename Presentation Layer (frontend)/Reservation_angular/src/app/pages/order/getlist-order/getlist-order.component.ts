import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { OrderService } from 'src/app/service/basicOrder.service';
import { PaymentService } from 'src/app/service/payment.service';
import { WaiterService } from 'src/app/service/waiter.service';
import { Payment } from 'src/data/payment';

@Component({
  selector: 'app-getlist-order',
  templateUrl: './getlist-order.component.html',
  styleUrls: ['./getlist-order.component.css']
})
export class GetlistOrderComponent implements OnInit {

  list:any[]=[];

  listAvaWaiter:any[]=[];
  defaultSelected = 2
  selection: number=0;
  orderId=new FormControl();
    

  from=new FormControl();
  to =new FormControl();
  
   constructor(private orderService:OrderService,private paymentService:PaymentService,private waiterService:WaiterService) { }
 
   selectedSortOrder: string = "Sort by...";

   ChangeSortOrder(order_Id:number,waiterId:number) { 

    console.log(order_Id+"    "+waiterId)

    this.orderService.UpdateWaiterIdByOrderId(order_Id,waiterId).subscribe(res=>{
      console.log(res)
    this.GetAllOrder();
    this.GetAvailableWaiter();
    });
   }
   
     // sort about id and waiter id ==null all order  assign waiter

   GetAvailableWaiter(){
    this.waiterService.GetAvailableWaiter().subscribe(res=>{console.log(res);
    this.listAvaWaiter=res;
    })
   }

   
   ngOnInit(): void {
     this.GetAllOrder();
     this.GetAvailableWaiter();
 

   }
   UpdateAccessStatusByOrderId(orderId:number,accessStatus:string){


    if(accessStatus=='no')
    this.orderService.UpdateAccessStatusByOrderId(orderId,"yes").subscribe(res=>{
      console.log(res)
      this.GetAllOrder();
    });
   }
   
   UpdatePaymentStatusByOrderId(order:any){
     
    if(order.payment_Status=='no')
    this.orderService.UpdatePaymentStatusByOrderId(order.order_Id,"yes").subscribe(res=>{
      console.log(res)
      this.GetAllOrder();
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
   search(){


    console.log(this.from+"ll")
    this.orderService.GetOrderByDate(this.from.value,this.to.value).subscribe((res:any[])=>{

this.list=res;

    });
 
   }
   DeleteOrder(orderId:number){
   this.orderService.DeleteOrder(orderId).subscribe(res=>{
     console.log(res+"kkk")
     this.GetAllOrder();
   });  
   
 }
   GetAllOrder(){
   this.orderService.GetAllOrder().subscribe((res:any[])=>{console.log(res);  this.list=res;})
   }
   GetOrderById(orderId:number){
   this.orderService.GetOrderById(orderId).subscribe((res:any[])=>{console.log(res);this.list=res;
  
  
  });
   }
   
   GetOrderByDate(from :Date,to :Date){
    this.orderService.GetOrderByDate(from,to).subscribe((res:any[])=>{console.log(res);this.list=res;});
    }
   
  


}
