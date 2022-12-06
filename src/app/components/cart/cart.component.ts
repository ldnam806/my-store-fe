import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductInCart } from 'src/app/models/productInCart';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  carts: ProductInCart[] = [];
  total: number = 0;
  angForm!: FormGroup;
  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.createForm();
  }
  async ngOnInit() {
    this.carts = await this.productService.getMyCart();
    this.total = await this.productService.sumTotal();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      'card-number': ['', Validators.required],
    });
  }
}
