export class MenuCategory {
     Menu_Category_Id: number=-1;
     Menu_Category_Parent_Id: number | null=-1;
     Menu_Category_Name: string='';
     Menu_Category_Content: string='';
     Menu_Category_Createdate: Date=new Date();
   
/*
public get Menu_Category_Id() : number {return this.menu_Category_Id; }
public set Menu_Category_Id(v :  number) {this.menu_Category_Id = v;}
public get Menu_Category_Parent_Id() : number | null {return this.menu_Category_Parent_Id; }
public set Menu_Category_Parent_Id(v :  number | null) {this.menu_Category_Parent_Id = v;}
public get Menu_Category_Name() : string {return this.menu_Category_Name; }
public set Menu_Category_Name(v :  string) {this.menu_Category_Name = v;}
public get Menu_Category_Content() : string {return this.menu_Category_Content; }
public set Menu_Category_Content(v :  string) {this.menu_Category_Content = v;}
public get Menu_Category_Createdate() :Date {return this.menu_Category_Createdate; }
public set Menu_Category_Createdate(v :  Date) {this.menu_Category_Createdate = v;}
/*menuItems: MenuItem[];
public get MenuItems() : MenuItem[] {return this.menuItems; }
public set MenuItems(v :  MenuItem[]) {this.menuItems = v;}
*/
}