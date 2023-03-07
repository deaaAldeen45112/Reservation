import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestimonailComponent } from './edit-testimonail.component';

describe('EditTestimonailComponent', () => {
  let component: EditTestimonailComponent;
  let fixture: ComponentFixture<EditTestimonailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestimonailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestimonailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
