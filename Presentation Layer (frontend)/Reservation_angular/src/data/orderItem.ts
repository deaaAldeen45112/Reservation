
export class OrderItem {
    private order_Item_Id: number=-1;
    private menu_Item_Id: number=-1;
    private order_Id: number=-1;
    private order_Item_Createdat: Date=new Date();
    private order_Item_Price: number | null=-1;
    private order_Item_Quantity: number | null=-1;


public get Order_Item_Id() : number {return this.order_Item_Id; }
public set Order_Item_Id(v :  number) {this.order_Item_Id = v;}
public get Menu_Item_Id() : number {return this.menu_Item_Id; }
public set Menu_Item_Id(v :  number) {this.menu_Item_Id = v;}
public get Order_Id() : number {return this.order_Id; }
public set Order_Id(v :  number) {this.order_Id = v;}
public get Order_Item_Createdat() : Date {return this.order_Item_Createdat; }
public set Order_Item_Createdat(v :  Date) {this.order_Item_Createdat = v;}
public get Order_Item_Price() : number | null {return this.order_Item_Price; }
public set Order_Item_Price(v :  number | null) {this.order_Item_Price = v;}
public get Order_Item_Quantity() : number | null {return this.order_Item_Quantity; }
public set Order_Item_Quantity(v :  number | null) {this.order_Item_Quantity = v;}
/*
menu_Item: MenuItem;
order: Basicorder;
public get Menu_Item() : MenuItem {return this.menu_Item; }
public set Menu_Item(v :  MenuItem) {this.menu_Item = v;}
public get Order() : Basicorder {return this.order; }
public set Order(v :  Basicorder) {this.order = v;}
*/}