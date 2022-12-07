import { ListComponent } from './list.component';
import { TestBed } from '@angular/core/testing';;
describe('BannerComponent (minimal)', () => {
  it('Should Create', () => {
    TestBed.configureTestingModule({declarations: [ListComponent]});
    const fixture = TestBed.createComponent(ListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
