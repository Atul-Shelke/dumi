import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.css']
})
export class LoginPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  loginForm:any=this.fb.group({
    Password:['',[Validators.required,Validators.minLength(2)]]
  })
  ngOnInit(): void {
  }

  onSubmit(){
    console.log('adhar',this.loginForm.value)
      }
}
