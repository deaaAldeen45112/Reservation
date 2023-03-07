import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIndexComponent } from './update-index.component';

describe('UpdateIndexComponent', () => {
  let component: UpdateIndexComponent;
  let fixture: ComponentFixture<UpdateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
