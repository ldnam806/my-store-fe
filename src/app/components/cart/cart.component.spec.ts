import { TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
describe('BannerComponent (minimal)', () => {
  it('Should Create', () => {
    TestBed.configureTestingModule({declarations: [CartComponent]});
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
