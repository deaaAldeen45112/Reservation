export class MenuItemDiscount {
    private discount_Id: number=-1;
    private menu_Item_Id: number | null=-1;
    private discount_Rate: number | null=-1;
    private discount_Start_Date:Date=new Date();
    private discount_End_Date: Date=new Date();
    
    public get Discount_Id() : number {return this.discount_Id; }
public set Discount_Id(v :  number) {this.discount_Id = v;}
public get Menu_Item_Id() : number | null {return this.menu_Item_Id; }
public set Menu_Item_Id(v :  number | null) {this.menu_Item_Id = v;}
public get Discount_Rate() : number | null {return this.discount_Rate; }
public set Discount_Rate(v :  number | null) {this.discount_Rate = v;}
public get Discount_Start_Date() : Date {return this.discount_Start_Date; }
public set Discount_Start_Date(v :Date) {this.discount_Start_Date = v;}
public get Discount_End_Date() : Date {return this.discount_End_Date; }
public set Discount_End_Date(v :Date) {this.discount_End_Date = v;}

/*menuItem: MenuItem;
public get MenuItem() : MenuItem {return this.menuItem; }
public set MenuItem(v :  MenuItem) {this.menuItem = v;}
*/

}