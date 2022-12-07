import { Product } from './../../../models/product';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class ProductDetailComponent {
  product : Product = {
    id : 1,
    name : '',
    price : 0,
    url : '',
    description : ''
  }
  currentId = ""
  constructor(private productService: ProductService ,private router: ActivatedRoute,) {}
  async ngOnInit() {
    this.router.params.subscribe((params) => {
        this.currentId = params['id'];
      });
      await this.productService
      .getProductById(this.currentId)
      .subscribe((res: Product[]) => {
        this.product = res[0];
        console.log(this.product);
        
      });
  }
}
