export class Testimonial {
    private  testimonial_Id: number=-1;
    private testimonial_Message: string='';
    private customer_Id: number | null=null;
  
    
public get Testimonial_Id() : number {return this.testimonial_Id; }
public set Testimonial_Id(v :  number) {this.testimonial_Id = v;}
public get Testimonial_Message() : string {return this.testimonial_Message; }
public set Testimonial_Message(v :  string) {this.testimonial_Message = v;}
public get Customer_Id() : number | null {return this.customer_Id; }
public set Customer_Id(v :  number | null) {this.customer_Id = v;}
}