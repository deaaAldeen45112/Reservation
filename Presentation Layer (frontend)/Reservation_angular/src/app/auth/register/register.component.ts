import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Register } from 'src/data/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerForm= new FormGroup({
  name: new FormControl('', [Validators.required,
      Validators.email]
     ),
    email: new FormControl(),
    phone:new FormControl(),
    password:new FormControl()
  });

  constructor(private authService:AuthService) { }

  register(){

let register:Register=new Register();
register.Name=this.registerForm.controls['name'].value;
register.Email=this.registerForm.controls['email'].value;
register.Phone=this.registerForm.controls['phone'].value;
register.Password=this.registerForm.controls['password'].value;


this.authService.register(register);


}


  ngOnInit(): void {
  }

}
