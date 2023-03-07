import { Payment } from "./payment";

export class PaymentMethod {
    private payment_Method_Id: number=-1;
    private payment_Method_Name: string='';
  
public get Payment_Method_Id() : number {return this.payment_Method_Id; }
public set Payment_Method_Id(v :  number) {this.payment_Method_Id = v;}
public get Payment_Method_Name() : string {return this.payment_Method_Name; }
public set Payment_Method_Name(v :  string) {this.payment_Method_Name = v;}
/*payments: Payment[];
public get Payments() : Payment[] {return this.payments; }
public set Payments(v :  Payment[]) {this.payments = v;}
*/
}