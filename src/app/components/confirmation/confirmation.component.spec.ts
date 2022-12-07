import { TestBed } from '@angular/core/testing';
import { ConfirmationComponent } from './confirmation.component';
describe('BannerComponent (minimal)', () => {
  it('Should Create', () => {
    TestBed.configureTestingModule({declarations: [ConfirmationComponent]});
    const fixture = TestBed.createComponent(ConfirmationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
