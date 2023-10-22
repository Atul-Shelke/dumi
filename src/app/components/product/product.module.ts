import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PanComponent } from '../pan/pan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdharDetailsComponent } from '../adhar-details/adhar-details.component';
import { LoginNameComponent } from '../login-name/login-name.component';
import { LoginPasswordComponent } from '../login-password/login-password.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { MobileNumberComponent } from '../mobile-number/mobile-number.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { StandardUserDetailsComponent } from '../standard-user-details/standard-user-details.component';
import { DateFieldComponent } from '../date-field/date-field.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { KycComponent } from '../kyc/kyc.component';
import { PaymentComponent } from '../payment/payment.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@NgModule({
  declarations: [PanComponent,AdharDetailsComponent,LoginNameComponent,LoginPasswordComponent,
                 MobileNumberComponent,UserDetailsComponent,StandardUserDetailsComponent,  DateFieldComponent,
                 DropdownComponent,KycComponent,PaymentComponent,HeaderComponent,
                 FooterComponent, SignUpComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    
  ],
  exports:[PanComponent,AdharDetailsComponent,SignUpComponent]
})
export class ProductModule { }
