import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  formComponents = [{
    name: 'Pan no.',
    component: 'pan-com'
  }, {
    name: 'Aadhar',
    component: 'adhar-com'
  },
   
  ];
}
