import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNowComponent } from './reservation-now.component';

describe('ReservationNowComponent', () => {
  let component: ReservationNowComponent;
  let fixture: ComponentFixture<ReservationNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
