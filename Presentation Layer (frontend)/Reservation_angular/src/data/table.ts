export class Table {
    private table_Id: number=-1;
    private max_Person: number=-1;
    private image_Location: string='';
    private details: string='';
    
public get Table_Id() : number {return this.table_Id; }
public set Table_Id(v :  number) {this.table_Id = v;}
public get Max_Person() : number {return this.max_Person; }
public set Max_Person(v :  number) {this.max_Person = v;}
public get Image_Location() : string {return this.image_Location; }
public set Image_Location(v :  string) {this.image_Location = v;}
public get Details() : string {return this.details; }
public set Details(v :  string) {this.details = v;}

}