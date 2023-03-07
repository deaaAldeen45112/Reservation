export class Footer {
    private  footer_Id: number=-1;
    private copyright_Notice: string='';
    private site_Map: string='';
    private social_Media_Icons: string='';
    
public get Footer_Id() : number {return this.footer_Id; }
public set Footer_Id(v :  number) {this.footer_Id = v;}
public get Copyright_Notice() : string {return this.copyright_Notice; }
public set Copyright_Notice(v :  string) {this.copyright_Notice = v;}
public get Site_Map() : string {return this.site_Map; }
public set Site_Map(v :  string) {this.site_Map = v;}
public get Social_Media_Icons() : string {return this.social_Media_Icons; }
public set Social_Media_Icons(v :  string) {this.social_Media_Icons = v;}
}