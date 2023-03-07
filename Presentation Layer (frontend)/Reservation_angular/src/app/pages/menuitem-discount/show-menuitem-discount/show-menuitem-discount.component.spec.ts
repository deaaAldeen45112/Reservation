import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuitemDiscountComponent } from './show-menuitem-discount.component';

describe('ShowMenuitemDiscountComponent', () => {
  let component: ShowMenuitemDiscountComponent;
  let fixture: ComponentFixture<ShowMenuitemDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuitemDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuitemDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
