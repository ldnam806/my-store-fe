import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Checkout } from '../models/Checkout';
import { ProductInCart } from '../models/productInCart';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  myCart: ProductInCart[] = [];
  currentCart: string = '';
  info: Checkout = {
    totalPrice: 0,
    fullname: '',
    address: '',
    cardNumber: '',
  };
  private personURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.personURL);
  }
  getInfo() {
    return this.info;
  }
  saveCheckout(data: Checkout) {
    this.info = { ...data };
    this.toastr.success('Success', 'Save checkout successfully!');
  }

  getProductById(id: string): Observable<Product[]> {
    const params = {
      id,
    };
    return this.http.get<Product[]>(this.personURL, { params });
  }
  getMyCart() {
    return this.myCart;
  }
  addToCart(product: Product) {
    var elementPos = this.myCart
      .map(function (x: any) {
        return x.id;
      })
      .indexOf(product.id);
    var objectFound = this.myCart[elementPos];
    if (objectFound) {
      this.myCart[elementPos].quantity++;
    } else {
      this.myCart.push({ ...product, quantity: 1 });
    }
    this.toastr.success('Success', 'Add product to cart successfully!');
  }
  sumTotal() {
    return [...this.myCart].reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
  }
  remove(index: number) {
    this.myCart.splice(index, 1);
    this.toastr.success('Success', 'Remove product successfully!');
  }
  resetAll() {
    this.myCart = [];
    this.info = {
      totalPrice: 0,
      fullname: '',
      address: '',
      cardNumber: '',
    };
  }
  augmentPrtoduct(index: number) {
    this.myCart[index].quantity = this.myCart[index].quantity + 1;
    this.sumTotal();
  }
  decreaseProduct(index: number) {
    this.myCart[index].quantity = this.myCart[index].quantity - 1;
    if (this.myCart[index].quantity < 1) {
      this.myCart.splice(index, 1);
    }
    this.sumTotal();
  }
  saveCurrentCard(card: string) {
    this.currentCart = card;
  }
}
