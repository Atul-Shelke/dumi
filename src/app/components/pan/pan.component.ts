import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css']
})
export class PanComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
 

  panForm:any=this.fb.group({
    panNo:['',[Validators.required, Validators.pattern(/[A-Z]{3}[P|H|F|C|A|T|B|L|J|G][A-Z]\d{4}[A-Z]$/)]]
  })

  // formFields: string[] = ['panNo'];

  
  ngOnInit(): void {
  }
 

  

  

  
}
