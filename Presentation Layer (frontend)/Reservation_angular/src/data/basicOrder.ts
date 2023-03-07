
export class Basicorder {
  
    
    private  customer_Id : number=-1;
    public get Customer_Id() : number {
        return this. customer_Id;
    }
    public set Customer_Id(v : number) {
        this. customer_Id = v;
    }
    
    private payment_Status: string='';
    public get Payment_Status() : string {
        return this. payment_Status;
    }
    public set Payment_Status(v : string) {
        this.payment_Status = v;
    }
    
    private  access_Status : string='';
    public get Access_Status() : string {
        return this. access_Status;
    }
    public set Access_Status(v : string) {
        this. access_Status = v;
    }
    private order_Id :number=-1;
    
    public get Order_Id() : number {
        return this. order_Id;
    }
    public set Order_Id(v : number) {
        this. order_Id = v;
    }
    



    private  order_Createdat : Date=new Date();
    public get Order_Createdat() : Date{
        return this. order_Createdat;
    }
    public set Order_Createdat(v : Date) {
        this. order_Createdat = v;
    }
    
    
    private  waiter_Id : number|null=null;
    public get Waiter_Id() : number|null {
        return this. waiter_Id;
    }
    public set Waiter_Id(v : number|null) {
        this. waiter_Id = v;
    }
    
   
       
    private  order_price : number=0;
    public get Order_price() : number {
        return this. order_price;
    }
    public set Order_price(v : number) {
        this. order_price = v;
    }

}