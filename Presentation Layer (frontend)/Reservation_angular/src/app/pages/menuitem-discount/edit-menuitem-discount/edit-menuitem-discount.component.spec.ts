import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuitemDiscountComponent } from './edit-menuitem-discount.component';

describe('EditMenuitemDiscountComponent', () => {
  let component: EditMenuitemDiscountComponent;
  let fixture: ComponentFixture<EditMenuitemDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuitemDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuitemDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
