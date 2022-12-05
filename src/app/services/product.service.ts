import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { ProductInCart } from '../models/productInCart';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    myCart: ProductInCart[] = [];
    user: User = {
        totalPrice: 0,
        fullName: '',
        address: '',
        creditNumber: '',
    };
    private personURL = 'http://localhost:3000/products';
    constructor(private http: HttpClient) { }

    getProductList(): Observable<Product[]> {
        return this.http.get<Product[]>(this.personURL);
    }
    getUser() {
        return this.user;
    }

    getProductById(id: number): Observable<Product[]> {
        const params = {
            id,
        };
        return this.http.get<Product[]>(this.personURL, { params });
    }
    getMyCart() {
        return this.myCart;
    }
    addToCart(product: Product) {
        var elementPos = this.myCart.map(function(x:any) {return x.id; }).indexOf(product.id);
        var objectFound = this.myCart[elementPos];
        if(objectFound){
            this.myCart[elementPos].quantity ++
        }else{
            this.myCart.push({ ...product, 'quantity': 1 })
        }
    
    }
    remove(id: number) {
        // const index = this.myCart.findIndex((i: Product) => i.id === id);
    }

}
