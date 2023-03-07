export class MenuItemReview {
    private menu_Item_Review_Id: number=-1;
    private menu_Item_Id: number=-1;
    private menu_Item_Review_Title: string='';
    private menu_Item_Rating: number | null=-1;
    private menu_Item_Review_Createdat: Date=new Date();
    private menu_Item_Content: string='';

public get Menu_Item_Review_Id() : number {return this.menu_Item_Review_Id; }
public set Menu_Item_Review_Id(v :  number) {this.menu_Item_Review_Id = v;}
public get Menu_Item_Id() : number  {return this.menu_Item_Id; }
public set Menu_Item_Id(v :  number) {this.menu_Item_Id = v;}
public get Menu_Item_Review_Title() : string {return this.menu_Item_Review_Title; }
public set Menu_Item_Review_Title(v :  string) {this.menu_Item_Review_Title = v;}
public get Menu_Item_Rating() : number | null {return this.menu_Item_Rating; }
public set Menu_Item_Rating(v :  number | null) {this.menu_Item_Rating = v;}
public get Menu_Item_Review_Createdat() : Date {return this.menu_Item_Review_Createdat; }
public set Menu_Item_Review_Createdat(v :  Date) {this.menu_Item_Review_Createdat = v;}
public get Menu_Item_Content() : string {return this.menu_Item_Content; }
public set Menu_Item_Content(v :  string) {this.menu_Item_Content = v;}
/*menuItem: MenuItem;
public get MenuItem() : MenuItem {return this.menuItem; }
public set MenuItem(v :  MenuItem) {this.menuItem = v;}
*/
}