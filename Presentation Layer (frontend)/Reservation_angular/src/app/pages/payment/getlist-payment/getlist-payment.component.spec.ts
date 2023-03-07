import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistPaymentComponent } from './getlist-payment.component';

describe('GetlistPaymentComponent', () => {
  let component: GetlistPaymentComponent;
  let fixture: ComponentFixture<GetlistPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
