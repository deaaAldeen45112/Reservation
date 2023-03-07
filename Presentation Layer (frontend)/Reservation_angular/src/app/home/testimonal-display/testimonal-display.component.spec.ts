import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalDisplayComponent } from './testimonal-display.component';

describe('TestimonalDisplayComponent', () => {
  let component: TestimonalDisplayComponent;
  let fixture: ComponentFixture<TestimonalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
