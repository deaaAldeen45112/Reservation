import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleService } from 'src/app/service/role-service';

@Component({
  selector: 'app-getlist-role',
  templateUrl: './getlist-role.component.html',
  styleUrls: ['./getlist-role.component.css']
})
export class GetlistRoleComponent implements OnInit {

  list:any[]=[];
  constructor(private roleService:RoleService,public spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    this.GetAllRole();
  }

  GetAllRole(){
  
   this.roleService.GetAllRole().subscribe((res:any[])=>{
    this.list=res; 
    console.log(res)
    this.spinner.hide();
           });
         
  }
  DeleteRole(id:number){
   this.roleService.DeleteRoleById(id).subscribe(res=>{console.log(res);this.GetAllRole();});
  }


}
