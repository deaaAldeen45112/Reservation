import { Credit } from "./credit";
import { PaymentMethod } from "./paymentMethod";

export class Payment {
    private payment_Id: number=-1;
    private payment_Method_Id: number | null=-1;
    private order_Id: number | null=-1;
    private payment_Price: number | null=-1;
    private payment_Date: Date=new Date();
    private payment_Currncy: string='';
    private credit_Id: number | null=-1;
  
    
public get Payment_Id() : number {return this.payment_Id; }
public set Payment_Id(v :  number) {this.payment_Id = v;}
public get Payment_Method_Id() : number | null {return this.payment_Method_Id; }
public set Payment_Method_Id(v :  number | null) {this.payment_Method_Id = v;}
public get Order_Id() : number | null {return this.order_Id; }
public set Order_Id(v :  number | null) {this.order_Id = v;}
public get Payment_Price() : number | null {return this.payment_Price; }
public set Payment_Price(v :  number | null) {this.payment_Price = v;}
public get Payment_Date() : Date {return this.payment_Date; }
public set Payment_Date(v :  Date) {this.payment_Date = v;}
public get Payment_Currncy() : string {return this.payment_Currncy; }
public set Payment_Currncy(v :  string) {this.payment_Currncy = v;}
public get Credit_Id() : number | null {return this.credit_Id; }
public set Credit_Id(v :  number | null) {this.credit_Id = v;}

/*
credit: Credit;
order: Basicorder;
paymentMethod: PaymentMethod;
cash: Cash;
public get Credit() : Credit {return this.credit; }
public set Credit(v :  Credit) {this.credit = v;}
public get Order() : Basicorder {return this.order; }
public set Order(v :  Basicorder) {this.order = v;}
public get PaymentMethod() : PaymentMethod {return this.paymentMethod; }
public set PaymentMethod(v :  PaymentMethod) {this.paymentMethod = v;}
public get Cash() : Cash {return this.cash; }
public set Cash(v :  Cash) {this.cash = v;}

*/
}