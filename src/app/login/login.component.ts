import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  "loginForm":FormGroup;
  isSubmitted = false;
  constructor(private router:Router,private formBuilder:FormBuilder,private service:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    }
    );
    this.login();
  }

  get formControls(){
    return this.loginForm.controls;
  }

  login(){
    console.log(this.loginForm.controls);
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.service.login();
    this.router.navigateByUrl("admin");
  }

}
