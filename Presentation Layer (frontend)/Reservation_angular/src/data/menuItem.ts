import { timestamp, Timestamp } from "rxjs";
import { CartItem } from "./cartItem";
import { MenuCategory } from "./menuItemCategory";
import { MenuItemDiscount } from "./menuItemDiscount";
import { MenuItemReview } from "./menuItemReview";
import { OrderItem } from "./orderItem";

export class MenuItem {
   private  menu_Item_Id: number=-1;
   private  menu_Item_Name: string='';
   private menu_Item_Price: number=-1;
   private menu_Item_Quantity: number=-1;
   private menu_Item_Createdat:Date =new Date();
   private menu_Item_Content: string='';
    private  menu_Id: number | null=null;
   private menu_Item_Image: string='';
public get Menu_Item_Id() : number {return this.menu_Item_Id; }
public set Menu_Item_Id(v :  number) {this.menu_Item_Id = v;}
public get Menu_Item_Name() : string {return this.menu_Item_Name; }
public set Menu_Item_Name(v :  string) {this.menu_Item_Name = v;}
public get Menu_Item_Price() : number {return this.menu_Item_Price; }
public set Menu_Item_Price(v :  number) {this.menu_Item_Price = v;}
public get Menu_Item_Quantity() : number {return this.menu_Item_Quantity; }
public set Menu_Item_Quantity(v :  number) {this.menu_Item_Quantity = v;}
public get Menu_Item_Createdat() : Date{return this.menu_Item_Createdat; }
public set Menu_Item_Createdat(v :  Date) {this.menu_Item_Createdat = v;}
public get Menu_Item_Content() : string {return this.menu_Item_Content; }
public set Menu_Item_Content(v :  string) {this.menu_Item_Content = v;}
public get Menu_Id() : number | null {return this.menu_Id; }
public set Menu_Id(v :  number | null) {this.menu_Id = v;}
public get Menu_Item_Image() : string {return this.menu_Item_Image; }
public set Menu_Item_Image(v :  string) {this.menu_Item_Image = v;}

/*
  
public get Menu() : MenuCategory {return this.menu; }
public set Menu(v :  MenuCategory) {this.menu = v;}
public get Menu_Item_Discount() : MenuItemDiscount {return this.menu_Item_Discount; }
public set Menu_Item_Discount(v :  MenuItemDiscount) {this.menu_Item_Discount = v;}
public get CartItems() : CartItem[] {return this.cartItems; }
public set CartItems(v :  CartItem[]) {this.cartItems = v;}
public get MenuItemReviews() : MenuItemReview[] {return this.menuItemReviews; }
public set MenuItemReviews(v :  MenuItemReview[]) {this.menuItemReviews = v;}
public get OrderItems() : OrderItem[] {return this.orderItems; }
public set OrderItems(v :  OrderItem[]) {this.orderItems = v;}
*/

}