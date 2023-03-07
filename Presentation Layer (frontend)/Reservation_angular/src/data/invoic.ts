import { Payment } from "./payment";

export class Invoic {
    private invoic_Id: number=-1;
    private payment_Id: number | null=-1;
    private  invoic_Date: string | null='';
    private  invoic_Details: string='';
    
    public get Invoic_Id() : number {return this.invoic_Id; }
public set Invoic_Id(v :  number) {this.invoic_Id = v;}
public get Payment_Id() : number | null {return this.payment_Id; }
public set Payment_Id(v :  number | null) {this.payment_Id = v;}
public get Invoic_Date() : string | null {return this.invoic_Date; }
public set Invoic_Date(v :  string | null) {this.invoic_Date = v;}
public get Invoic_Details() : string {return this.invoic_Details; }
public set Invoic_Details(v :  string) {this.invoic_Details = v;}
/*invoicNavigation: Payment;
public get InvoicNavigation() : Payment {return this.invoicNavigation; }
public set InvoicNavigation(v :  Payment) {this.invoicNavigation = v;}
*/
}