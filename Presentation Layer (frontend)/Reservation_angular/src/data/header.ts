export class Header {
    private header_Id: number=-1;
    private logo_Image: string='';
    private project_Name: string='';
    
public get Header_Id() : number {return this.header_Id; }
public set Header_Id(v :  number) {this.header_Id = v;}
public get Logo_Image() : string {return this.logo_Image; }
public set Logo_Image(v :  string) {this.logo_Image = v;}
public get Project_Name() : string {return this.project_Name; }
public set Project_Name(v :  string) {this.project_Name = v;}

}