import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanComponent } from '../pan/pan.component';
import { AdharDetailsComponent } from '../adhar-details/adhar-details.component';
import { LoginNameComponent } from '../login-name/login-name.component';
import { LoginPasswordComponent } from '../login-password/login-password.component';
import { MobileNumberComponent } from '../mobile-number/mobile-number.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { StandardUserDetailsComponent } from '../standard-user-details/standard-user-details.component';
import { DateFieldComponent } from '../date-field/date-field.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

const routes: Routes = [
  {path:'pan',component:PanComponent},
  {path:'adhar-details',component:AdharDetailsComponent},
  {path:'username',component:LoginNameComponent},
  {path:'password',component:LoginPasswordComponent},
  // {path:'left-menu',component:LeftMenuComponent},
  {path:'mobile',component:MobileNumberComponent},
  {path:'user-details',component:UserDetailsComponent},
  {path:'standard-user-details',component:StandardUserDetailsComponent},
  {path:'date',component:DateFieldComponent},
  {path:'dropdown',component:DropdownComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
