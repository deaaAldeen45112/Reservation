import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistMenuitemDiscountComponent } from './getlist-menuitem-discount.component';

describe('GetlistMenuitemDiscountComponent', () => {
  let component: GetlistMenuitemDiscountComponent;
  let fixture: ComponentFixture<GetlistMenuitemDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistMenuitemDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistMenuitemDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
