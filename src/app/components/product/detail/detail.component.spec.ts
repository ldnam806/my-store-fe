import { TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './detail.component';
describe('BannerComponent (minimal)', () => {
  it('Should Create', () => {
    TestBed.configureTestingModule({declarations: [ProductDetailComponent]});
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
