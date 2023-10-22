import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adhar-details',
  templateUrl: './adhar-details.component.html',
  styleUrls: ['./adhar-details.component.css']
})
export class AdharDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
 
  adharForm:any=this.fb.group({
    adharNo:['',[Validators.required, Validators.pattern( /^\d{12}$/)]]
  })
  ngOnInit(): void {
  }
 

}
