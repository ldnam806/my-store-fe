import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent } from './components/product/list/list.component'
import {CartComponent} from './components/cart/cart.component'

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
