import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContactusComponent } from './get-contactus.component';

describe('GetContactusComponent', () => {
  let component: GetContactusComponent;
  let fixture: ComponentFixture<GetContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
