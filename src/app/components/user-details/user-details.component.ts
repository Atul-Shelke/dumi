import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  userForm:any=this.fb.group({
    firstname:['',[Validators.required]],
    lastname :['',[Validators.required]],
    cAddress :['',[Validators.required]],
    pAddress :['',[Validators.required]],
    mobileno :['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
    pincode  :['',[Validators.required,Validators.pattern(/^\d{6}$/)]]

  })
  ngOnInit(): void {
  }
  onSubmit(){
console.log('form',this.userForm.value)
  }

}
