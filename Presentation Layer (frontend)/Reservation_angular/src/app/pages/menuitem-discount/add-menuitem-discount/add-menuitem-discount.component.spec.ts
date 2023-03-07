import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuitemDiscountComponent } from './add-menuitem-discount.component';

describe('AddMenuitemDiscountComponent', () => {
  let component: AddMenuitemDiscountComponent;
  let fixture: ComponentFixture<AddMenuitemDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuitemDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuitemDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
