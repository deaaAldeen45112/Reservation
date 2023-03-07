import { Payment } from "./payment";

export class Credit {
   private  credit_Id: number=-1;
   private credit_Number: string='';
   private credit_Amount: number | null=null;
   

public get Credit_Id() : number {return this.credit_Id; }
public set Credit_Id(v :  number) {this.credit_Id = v;}
public get Credit_Number() : string {return this.credit_Number; }
public set Credit_Number(v :  string) {this.credit_Number = v;}
public get Credit_Amount() : number | null {return this.credit_Amount; }
public set Credit_Amount(v :  number | null) {this.credit_Amount = v;}

/*
private  payments: Payment[];
public get Payments() : Payment[] {return this.payments; }
public set Payments(v :  Payment[]) {this.payments = v;}
*/
}