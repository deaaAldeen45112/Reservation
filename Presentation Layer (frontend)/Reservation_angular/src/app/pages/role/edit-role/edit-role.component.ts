import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/service/role-service';
import { Role } from 'src/data/role';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {


   name=new FormControl()
   editId:number=-1;
  
  constructor(private roleService:RoleService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.editId= res['id'];
    
    });
  }

  UpdateRole(){
let role =new Role();
role.Id=this.editId;
console.log(role.Id)
role.Role_Name=this.name.value;
console.log(role.Role_Name)
this.roleService.UpdateRole(role).subscribe(res=>{console.log(res)})

  }


}
