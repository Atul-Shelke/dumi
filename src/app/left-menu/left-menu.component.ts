import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDragStart,
  CdkDragEnd,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PanComponent } from '../components/pan/pan.component';
import { AdharDetailsComponent } from '../components/adhar-details/adhar-details.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicFormService } from '../common-services/dynamic-form.service';



declare const $: any;
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  formComponents: any[] = []

  constructor(private fb: FormBuilder, public dynamicForm: DynamicFormService) {
    this.formComponents = this.dynamicForm.formComponents
  }
  demo: any = this.fb.group({
    name: ['']
  })

  formData: any[] = []

  loginForm:any=this.fb.group({
    username:['',[Validators.required, Validators.minLength(2)]]
  })

  ngOnInit(): void {
    console.log('form',this.formData)
  }




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log('if', event.previousContainer, event.container)
      let field = event.container.data[event.previousIndex]
      console.log('field -->', field)

      this.formData.push(field);


    } else {
      console.log('trans'),
        //console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
        transferArrayItem(

          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
    }

    console.log('FormData -->', this.formData)
  }
  onDrop(event: CdkDragDrop<any[]>) {
    this.drop(event)
    console.log('drop', this.drop(event))
  }

}
