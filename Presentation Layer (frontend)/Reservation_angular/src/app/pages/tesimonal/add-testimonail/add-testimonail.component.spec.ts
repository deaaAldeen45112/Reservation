import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestimonailComponent } from './add-testimonail.component';

describe('AddTestimonailComponent', () => {
  let component: AddTestimonailComponent;
  let fixture: ComponentFixture<AddTestimonailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestimonailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestimonailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
