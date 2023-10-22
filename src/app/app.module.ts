import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddonsComponent } from './components/addons/addons.component';


import { ProductModule } from './components/product/product.module';
import { PanComponent } from './components/pan/pan.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AddonsComponent,
  LeftMenuComponent,
 
    
   
  
   
   
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }

