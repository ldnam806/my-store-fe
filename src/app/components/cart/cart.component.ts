import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductInCart } from 'src/app/models/productInCart';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  
})
export class CartComponent {
  carts: ProductInCart[] = [];
  angForm!: FormGroup;
  @Input() cartNumber: string ='';
  @Output('logCardNumber') change = new EventEmitter<string>();
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }
  async ngOnInit() {
    this.carts = await this.productService.getMyCart();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      'card-number': [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(8),
          Validators.maxLength(16),
        ]),
      ],
    });
  }

  sum() {
    return this.productService.sumTotal().toFixed(1);
  }

  onAgmentPrtoduct(index: number) {
    this.productService.augmentPrtoduct(index);
  }
  onDecreaseProductPrtoduct(index: number) {
    this.productService.decreaseProduct(index);
  }
  onRemoveProduct(index: number) {
    this.productService.remove(index);
  }
  onSubmit() {
    let data = {
      fullname: this.angForm.value?.name,
      address: this.angForm.value?.address,
      cardNumber: this.angForm.value?.['card-number'],
      totalPrice: Number(this.productService.sumTotal().toFixed(1)),
    };
    this.productService.saveCheckout(data);
    this.router.navigate(['/confirmation']);
  }

  logCardNumber(arg: any) {
    this.change.emit(arg);
  }
}
