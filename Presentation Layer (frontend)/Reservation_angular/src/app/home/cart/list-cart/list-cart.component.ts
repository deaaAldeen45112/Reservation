import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/service/basicOrder.service';
import { CartItemService } from 'src/app/service/cartItem.service';
import { CreditService } from 'src/app/service/credit.service';
import { orderItemService } from 'src/app/service/orderItem.service';
import { PaymentService } from 'src/app/service/payment.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { Basicorder } from 'src/data/basicOrder';
import { OrderItem } from 'src/data/orderItem';
import { Payment } from 'src/data/payment';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {
  defaultSelected = 0;
  selection: number = 0;
  seasons: string[] = ["credit", "cash"];
  favoriteSeason: string = "";
  orderId: number = -1;
  creditNumber: FormControl = new FormControl({ value: "", disabled: false });

  constructor(private orderItemService: orderItemService
    , private orderService: OrderService
    , private creditService: CreditService,
    private cartItemService: CartItemService,
    private paymentService: PaymentService,
    private spinner:NgxSpinnerService,
    private reservationService: ReservationService,
    private toaster:ToastrService,
    private router: Router) { }
  list: any[] = [];


  RequestOrder() {


    let totalprice: number = this.totalPrice();
    let credit: any;
    if (this.selection == 0) {
      this.creditService.GetCreditByCreditNumber(this.creditNumber.value).subscribe(async res => {

        credit = res[0];
        if (credit != null) {
          console.log(credit.credit_Amount + "  " + totalprice)

          if (credit.credit_Amount != null && totalprice != null && credit.credit_Amount > totalprice) {
            this.InsertTrans("yes", "no");
            credit.credit_Amount = credit.credit_Amount - totalprice;
            this.creditService.UpdeteAmountByCreditNumber(credit).subscribe(res => { console.log("update amount") });
            this.orderService.GetLastOrderId().subscribe((res: any) => {
              console.log(res[0].lastOrderId + "ddd");
              this.InsertPayment(res[0].lastOrderId, credit.credit_Id);
              this.AddOrderItems(res[0].lastOrderId);


            })


          }
          else {

            console.log("you havnot monay");
            this.toaster.error("you have not monay");

          }
        } else {
          console.log("number isnot found ");
          this.toaster.error("number is not found");
        }
      });
    }
    else if (this.selection == 1) {
      this.InsertTrans("no", "no");
      this.orderService.GetLastOrderId().subscribe((res: any) => {
        console.log(res[0].lastOrderId);
        this.orderId = res[0].lastOrderId;

        this.AddOrderItems(res[0].lastOrderId);

      });




    }
  
else {

  this.toaster.error("you don't reserve")


}



  

}







AddOrderItems(orderId: number){

  this.list.forEach(element => {
    let orderItem: OrderItem = new OrderItem();
    orderItem.Order_Item_Price = element.cart_Item_Price;
    orderItem.Order_Item_Quantity = element.cart_Item_Quantity;
    orderItem.Order_Id = orderId;
    orderItem.Menu_Item_Id = element.menu_Item_Id;
    console.log(element.menu_Item_Id);
    this.orderItemService.InsertOrderItem(orderItem).subscribe(res => { console.log(res)
    
    })

  });
}

async InsertTrans(paymentStatus: string, accessStatus: string){

  let order: Basicorder = new Basicorder();
  order.Access_Status = accessStatus;
  order.Payment_Status = paymentStatus;
  let customerId = localStorage.getItem('customer_id');

  if (customerId != null) {
    order.Customer_Id = Number.parseInt(customerId);
  }
  order.Waiter_Id = null;
  order.Order_price = this.totalPrice();
  this.orderService.InsertOrder(order).subscribe(res => { console.log("order")



  this.toaster.success("order successfully");});
}
InsertPayment(orderId: number, creditId: number)
{
  let payment: Payment = new Payment();
  payment.Payment_Price = this.totalPrice();
  payment.Payment_Currncy = "Jordan";
  payment.Payment_Method_Id = 2;
  payment.Order_Id = orderId;
  console.log(orderId + "  " + creditId)
  payment.Credit_Id = creditId;
  this.paymentService.InsertPayment(payment).subscribe(res => {

    console.log(res);
    this.toaster.success("card payment successfully")
  });

}
totalPri: number = 0;
totalPrice(){

  let totalPrice = 0;
  this.list.forEach(element => {
    totalPrice += element.cart_Item_Price * element.cart_Item_Quantity;
  });
  return totalPrice;
}

DeleteFromCartItemByCartItemId(cartItemId: number){

  this.cartItemService.DeleteFromCartItemByCartItemId(cartItemId).subscribe(res => {
    console.log(res);
    let cartId = localStorage.getItem('cart_id');
    if (cartId != null) {
      this.GetCartItemByCartId(Number.parseInt(cartId));
    }

  })

}
DeleteAllCartItemByCartId(cartId: number){

  this.cartItemService.DeleteAllCartItemByCartId(cartId).subscribe(res => {

    console.log(res);


  })
}
countItems = 0;

GetCartItemByCartId(cartId: number){
this.spinner.show();

  this.cartItemService.GetCartItemByCartId(cartId).subscribe((res: any[]) => {
    console.log(res);
    this.list = res;
    this.countItems = res.length;
    this.totalPri = this.totalPrice();
    this.spinner.hide();
  })

}


EnableAnddisable(){

  if (this.selection == 1) this.creditNumber.enable(); else this.creditNumber.disable();
  console.log(this.selection)

}
ngOnInit(): void {
  let cartId=localStorage.getItem('cart_id');
  if(cartId!= null)
{

  this.GetCartItemByCartId(Number.parseInt(cartId));
}


    
  }

GetReservationBycustomerIdInSysTime(){


}

}