import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private customerService:CustomerService,private toast:ToastrService) { }
list:any[]=[];
name=new FormControl();
pass=new FormControl();
phone=new FormControl();

  ngOnInit(): void {
let registerId=localStorage.getItem('register_id');
console.log(registerId)
    if(registerId!=null)
   this.customerService.
   GetRegisterByRegisterId(Number.parseInt(registerId))
   .subscribe((res:any[])=>{
     console.log(res)
      this.list=res;
      console.log(res[0].name)

  })
  }

UpdateRegister(){
  let registerId=localStorage.getItem('register_id');
  console.log(registerId)
      if(registerId!=null)
  this.customerService.UpdateRegister(Number.parseInt(registerId),this.name.value,this.phone.value,this.pass.value).subscribe(res=>{console.log(res)
    let registerId=localStorage.getItem('register_id');
    console.log(registerId)
        if(registerId!=null)
       this.customerService.
       GetRegisterByRegisterId(Number.parseInt(registerId))
       .subscribe((res:any[])=>{
         console.log(res)
          this.list=res;
          console.log(res[0].name)
           localStorage.setItem('name',res[0].name);
    window.location.href='./Dashbord/profile'
      })
  this.toast.success("update success")
  });
}



}
