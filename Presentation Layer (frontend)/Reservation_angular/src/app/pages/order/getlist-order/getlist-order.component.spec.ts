import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistOrderComponent } from './getlist-order.component';

describe('GetlistOrderComponent', () => {
  let component: GetlistOrderComponent;
  let fixture: ComponentFixture<GetlistOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
