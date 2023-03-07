import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTestimonailComponent } from './show-testimonail.component';

describe('ShowTestimonailComponent', () => {
  let component: ShowTestimonailComponent;
  let fixture: ComponentFixture<ShowTestimonailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTestimonailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTestimonailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
