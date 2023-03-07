import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-getlist-em',
  templateUrl: './getlist-em.component.html',
  styleUrls: ['./getlist-em.component.css']
})
export class GetlistEmComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  list: any[] = [];
  ngOnInit(): void {
   this. GetAllEmployee();
  }

  GetAllEmployee() {

    this.employeeService.GetAllEmployee().subscribe((res: any[]) => {
      this.list = res;
    });

  }

  DeleteEmployee(id: number) {
    this.employeeService.DeleteEmployee(id).subscribe(res => {console.log(res); this. GetAllEmployee();});
  }





}
