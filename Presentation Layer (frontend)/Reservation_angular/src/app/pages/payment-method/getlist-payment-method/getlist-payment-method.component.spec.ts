import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistPaymentMethodComponent } from './getlist-payment-method.component';

describe('GetlistPaymentMethodComponent', () => {
  let component: GetlistPaymentMethodComponent;
  let fixture: ComponentFixture<GetlistPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
