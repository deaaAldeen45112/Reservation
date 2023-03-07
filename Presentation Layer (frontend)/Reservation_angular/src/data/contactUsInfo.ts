export class ContactUsInfo {
    private id: number=-1;
    private location: string='';
    private email: string='';
    private phone: string='';
    private open_Hours: string='';
    private open_Days: string='';

public get Id() : number {return this.id; }
public set Id(v :  number) {this.id = v;}
public get Location() : string {return this.location; }
public set Location(v :  string) {this.location = v;}
public get Email() : string {return this.email; }
public set Email(v :  string) {this.email = v;}
public get Phone() : string {return this.phone; }
public set Phone(v :  string) {this.phone = v;}
public get Open_Hours() : string {return this.open_Hours; }
public set Open_Hours(v :  string) {this.open_Hours = v;}
public get Open_Days() : string {return this.open_Days; }
public set Open_Days(v :  string) {this.open_Days = v;}
}