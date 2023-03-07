import { Payment } from "./payment";

export class Cash {
   
   
    private payment_Id: number | null=-1;
    private  cash_Id: number=-1;
    public get Cash_Id() : number {return this.cash_Id; }
    public set Cash_Id(v :  number) {this.cash_Id = v;}
    public get Payment_Id() : number | null {return this.payment_Id; }
    public set Payment_Id(v :  number | null) {this.payment_Id = v;}
/*
    private payment: Payment;
    public get Payment() : Payment {return this.payment; }
    public set Payment(v :  Payment) {this.payment = v;}
*/
}