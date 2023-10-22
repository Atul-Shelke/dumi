import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  dateForm:any=this.fb.group({
    date:['',[Validators.required]]
  })
  ngOnInit(): void {
  }
onSubmit(){
  
}
}
