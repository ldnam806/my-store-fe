import { Checkout } from './../../models/Checkout';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
 data : Checkout ={
    
    fullname: '',
    address: '',
    cardNumber:'',
    totalPrice: 0

 }
  constructor(private productService : ProductService, private router :Router) {
  
  }
   ngOnInit() {
    this.data = this.productService.getInfo()
  }

  backToShopping() {
    this.productService.resetAll()
    this.router.navigate(['/']);
  }
 
}
