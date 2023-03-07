export class AboutUs
{
   private id :number=0;
   private about_Us_Body :string='';
   public get About_Us_Body() : string {
       return this.about_Us_Body;
   }
   public set About_Us_Body(v : string) {
       this.about_Us_Body= v;
   }
   
    public get Id() : number {
    return this.id;
    }
   public set Id(v : number) {
    this.id = v;
   }



}