import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.css']
})
export class MobileNumberComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
 
  numberForm:any=this.fb.group({
    number:['',[Validators.required, Validators.pattern(/^\d{10}$/)]]
  })
  ngOnInit(): void {
  }
onSubmit(){
  
}
}
