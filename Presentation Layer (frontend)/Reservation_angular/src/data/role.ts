import { Employee } from "./employee";

export class Role {
    private id: number=-1;
    private role_Name: string='';
  
    public get Id() : number {return this.id; }
public set Id(v :  number) {this.id = v;}
public get Role_Name() : string {return this.role_Name; }
public set Role_Name(v :  string) {this.role_Name = v;}
/*
employees: Employee[];
public get Employees() : Employee[] {return this.employees; }
public set Employees(v :  Employee[]) {this.employees = v;}

*/
}