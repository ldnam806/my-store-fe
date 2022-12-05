import { ProductInCart } from './../../../models/productInCart';
import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../../../models/product';


import { ProductService } from '../../../services/product.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
  })


  export class ListComponent implements OnInit {
    productList: Product[] = [];
    defaultQuantity: Array<number> = [1,2,3,4 ,5,6,7,8,9,10];
    quantity=  1
    myCart: ProductInCart[] = [];
    constructor(private productService: ProductService) {}
    async ngOnInit(){
      this.productService
        .getProductList()
        .subscribe((res) => {
            this.productList = res
            console.log( this.productList);
            
        });
        this.myCart = await this.productService.getMyCart();
        console.log('this.myCart', this.myCart);
        
    }
  

    onAddToCart(product: Product) {
         this.productService.addToCart(product);
         console.log('this.addToCart', this.myCart);
    }

    onSelectQuantity() {
      console.log(this.quantity);
    }
  }

   