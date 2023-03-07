import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmployeeDto } from 'src/dto/EmployeeDto';

@Component({
  selector: 'app-add-em',
  templateUrl: './add-em.component.html',
  styleUrls: ['./add-em.component.css']
})
export class AddEmComponent implements OnInit {

  constructor(private empService:EmployeeService,private toast:ToastrService) { }
  insertEmployee= new FormGroup({
    name: new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    phone:new FormControl(),
    salary:new FormControl(),
    roleId:new FormControl()
  });
  ngOnInit(): void {
  }

AddEmployee(){
let emp:EmployeeDto=new EmployeeDto();
emp.Name=this.insertEmployee.controls['name'].value;
emp.Email=this.insertEmployee.controls['email'].value;
emp.Password=this.insertEmployee.controls['password'].value;
emp.Phone=this.insertEmployee.controls['phone'].value;
emp.Salary=Number.parseFloat(this.insertEmployee.controls['salary'].value);
emp.Role_id= Number.parseInt(this.insertEmployee.controls['roleId'].value);
this.empService.AddEmployee(emp).subscribe(res=>{console.log(res)

this.toast.success("add Employee success");}
);

}




}
