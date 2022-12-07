import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent } from './components/product/list/list.component'
import {CartComponent} from './components/cart/cart.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductDetailComponent } from './components/product/detail/detail.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  {path:'confirmation',component: ConfirmationComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
