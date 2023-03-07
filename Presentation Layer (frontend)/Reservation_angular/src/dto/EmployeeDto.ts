export class EmployeeDto {
    private  id: number=-1;
    private salary: number=-1;
    private hire_Date:Date=new Date();
    private role_id: number=-1;
    private name : string='';

    public get Name() : string {
        return this.name;
    }
    public set Name(v : string) {
        this.name = v;
    }
    private email : string='';
    public get Email() : string {
        return this.email;
    }
    public set Email(v : string) {
        this.email = v;
    }
    private password : string='';
    public get Password() : string {
        return this.password;
    }
    public set Password(v : string) {
        this.password = v;
    }
    private phone : string='';
    public get Phone() : string {
        return this.phone;
    }
    public set Phone(v : string) {
        this.phone = v;
    }
    
public get Employee_Id() : number {return this.id; }
public set Employee_Id(v :  number) {this.id = v;}
public get Salary() : number {return this.salary; }
public set Salary(v :  number) {this.salary = v;}
public get Hire_Date() : Date {return this.hire_Date; }
public set Hire_Date(v :  Date) {this.hire_Date = v;}
public get Role_id() : number {return this.role_id; }
public set Role_id(v :  number) {this.role_id = v;} 

}
