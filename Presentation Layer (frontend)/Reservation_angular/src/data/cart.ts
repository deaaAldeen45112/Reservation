import { CartItem } from "./cartItem";
import { Customer } from "./customer";

export class Cart {
   
    private  cart_Id : number=-1;
    public get Cart_Id() : number {
        return this.cart_Id;
    }
    public set Cart_Id(v : number) {
        this.cart_Id = v;
    }
    

    private  customer_Id : number=-1;
    public get Customer_Id() : number {
        return this. customer_Id;
    }
    public set Customer_Id(v : number) {
        this. customer_Id = v;
    }

    private created_Date : string='';
    public get Created_Date() : string {
        return this. created_Date;
    }
    public set Created_Date(v : string) {
        this. created_Date = v;
    }
    
    private  customer : Customer|null=null;
    public get Customer() : Customer|null {
        return this. customer;
    }
    public set Customer(v : Customer|null) {
        this. customer = v;
    }


    private  cartItems : CartItem[]|null=null;
    public get CartItems() : CartItem[]|null {
        return this.cartItems;
    }
    public set CartItems(v : CartItem[]|null) {
        this. cartItems = v;
    }
    
}