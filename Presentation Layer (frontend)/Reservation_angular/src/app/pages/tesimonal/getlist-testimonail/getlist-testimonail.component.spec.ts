import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistTestimonailComponent } from './getlist-testimonail.component';

describe('GetlistTestimonailComponent', () => {
  let component: GetlistTestimonailComponent;
  let fixture: ComponentFixture<GetlistTestimonailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistTestimonailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistTestimonailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
