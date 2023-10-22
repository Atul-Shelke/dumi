import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-name',
  templateUrl: './login-name.component.html',
  styleUrls: ['./login-name.component.css']
})
export class LoginNameComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  loginForm:any=this.fb.group({
    username:['',[Validators.required, Validators.minLength(2)]]
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log('adhar',this.loginForm.value)
      }

}
