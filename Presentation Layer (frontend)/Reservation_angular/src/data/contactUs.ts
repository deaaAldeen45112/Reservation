export class ContactUs {
  private contact_Id: number=-1;
  private name: string='';
  private email: string='';
  private phone: string='';
  private subject: string='';
  private message: string='';


public get Contact_Id() : number {return this.contact_Id; }
public set Contact_Id(v :  number) {this.contact_Id = v;}
public get Name() : string {return this.name; }
public set Name(v :  string) {this.name = v;}
public get Email() : string {return this.email; }
public set Email(v :  string) {this.email = v;}
public get Phone() : string {return this.phone; }
public set Phone(v :  string) {this.phone = v;}
public get Subject() : string {return this.subject; }
public set Subject(v :  string) {this.subject = v;}
public get Message() : string {return this.message; }
public set Message(v :  string) {this.message = v;}
}