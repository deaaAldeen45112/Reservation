import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

import { Login } from 'src/data/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required,
    Validators.email]);
    passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)]); 
    
     constructor(private router: Router,public authservice:AuthService) { }
login(){
  let objLogin:Login=new Login();
 objLogin.Email=this.emailControl.value;
 objLogin.Pass=this.passwordControl.value;
console.log(objLogin.Email)
this.authservice.login(objLogin);





}
  ngOnInit(): void {
  }

}