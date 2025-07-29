import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm:FormGroup=new FormGroup({})

  constructor(private fb:FormBuilder,private router:Router){
      this.loginForm=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })
  }
reqpwd:any;
  checkLogin(){
      if(this.loginForm.value.username=="admin"&&this.loginForm.value.password=="12345"){
        localStorage.setItem("admin",JSON.stringify(this.loginForm.value));
        this.router.navigateByUrl("/admin/home")
      }
      else{
            this.reqpwd=this.loginForm.value.username.slice(0,3)+"123";
            if(this.reqpwd==this.loginForm.value.password){
              localStorage.setItem("user",JSON.stringify(this.loginForm.value));
              this.router.navigateByUrl("/user/home")
            }
      }
  }
}

