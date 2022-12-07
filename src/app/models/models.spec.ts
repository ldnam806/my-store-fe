import { Checkout } from './Checkout';
import { Product } from './product';


describe('Models', () => {

  it('Should Create', () => {
    expect(new Product()).toBeTruthy();
  });

  it('Should Create', () => {
    expect(new Checkout()).toBeTruthy();
  });

});

