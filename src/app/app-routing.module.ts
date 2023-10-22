import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';

const routes: Routes = [
  {path:'product',loadChildren:()=>import('./components/product/product.module').then(m=>m.ProductModule)},
  {path:'left-menu',component:LeftMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
