export class SysImage {
    private sysImage_Id: number=-1;
    private image_Path: string='';
    private image_Name: string='';
    public get SysImage_Id() : number {return this.sysImage_Id; }
public set SysImage_Id(v :  number) {this.sysImage_Id = v;}
public get Image_Path() : string {return this.image_Path; }
public set Image_Path(v :  string) {this.image_Path = v;}
public get Image_Name() : string {return this.image_Name; }
public set Image_Name(v :  string) {this.image_Name = v;}

}