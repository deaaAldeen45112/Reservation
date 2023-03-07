import { Register } from "./register";
import { Role } from "./role";

export class Employee {
    private  id: number=-1;
    private salary: number=-1;
    private hireDate: string='';
    private registerId: number=-1;
    private roleId: number=-1;
   
    
public get Id() : number {return this.id; }
public set Id(v :  number) {this.id = v;}
public get Salary() : number {return this.salary; }
public set Salary(v :  number) {this.salary = v;}
public get HireDate() : string {return this.hireDate; }
public set HireDate(v :  string) {this.hireDate = v;}
public get RegisterId() : number {return this.registerId; }
public set RegisterId(v :  number) {this.registerId = v;}
public get RoleId() : number {return this.roleId; }
public set RoleId(v :  number) {this.roleId = v;}

/*register: Register;
role: Role;


public get Register() : Register {return this.register; }
public set Register(v :  Register) {this.register = v;}
public get Role() : Role {return this.role; }
public set Role(v :  Role) {this.role = v;}
*/
}