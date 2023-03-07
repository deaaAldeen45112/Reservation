import { Cart } from "./cart";

export class CartItem {
  
    private  cart_Item_Id : number=-1;
    public get Cart_Item_Id() : number {
        return this.cart_Item_Id;
    }
    public set Cart_Item_Id(v : number) {
        this.cart_Item_Id = v;
    }
    
    private  cart_Id : number=-1;
    public get Cart_Id() : number {
        return this.cart_Id;
    }
    public set Cart_Id(v : number) {
        this.cart_Id = v;
    }
    
    private   menu_Item_Id : number=-1;
    public get  Menu_Item_Id() : number {
        return this. menu_Item_Id;
    }
    public set  Menu_Item_Id(v : number) {
        this. menu_Item_Id = v;
    }
   
    private cart_Item_Price : number=0;
    public get  Cart_Item_Price() : number {
        return this. cart_Item_Price;
    }
    public set  Cart_Item_Price(v : number) {
        this. cart_Item_Price = v;
    }

   

    private  cart_Item_Quantity : number=0;
    public get   Cart_Item_Quantity() : number {
        return this.  cart_Item_Quantity;
    }
    public set   Cart_Item_Quantity(v : number) {
        this.  cart_Item_Quantity = v;
    }
 
    private add_Date :Date=new Date();
    public get Add_Date() : Date {
        return this.add_Date;
    }
    public set Add_Date(v : Date) {
        this.add_Date = v;
    }
  /*  private cart: Cart[];
    public get Cart() : Cart[] {return this.cart; }
    public set Cart(v :  Cart[]) {this.cart = v;}
*/

}