import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('Product Service', () => {
  it('Should Create', () => {
    let services: ProductService;
    TestBed.configureTestingModule({});
    services = TestBed.inject(ProductService);
    expect(services).toBeTruthy();
  });
});
