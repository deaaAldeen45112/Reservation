import { Employee } from "./employee";

export class Waiter {
    private waiter_Id: number=-1;
    private employee_Id: number | null=-1;
    
    
public get Waiter_Id() : number {return this.waiter_Id; }
public set Waiter_Id(v :  number) {this.waiter_Id = v;}
public get Mployee_Id() : number | null {return this.employee_Id; }
public set Mployee_Id(v :  number | null) {this.employee_Id = v;}
/*
employee: Employee; 
basicorders: Basicorder[];
public get Employee() : Employee {return this.employee; }
public set Employee(v :  Employee) {this.employee = v;}
public get Basicorders() : Basicorder[] {return this.basicorders; }
public set Basicorders(v :  Basicorder[]) {this.basicorders = v;}
*/}