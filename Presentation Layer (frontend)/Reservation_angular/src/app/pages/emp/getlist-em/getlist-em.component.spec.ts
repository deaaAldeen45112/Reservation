import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistEmComponent } from './getlist-em.component';

describe('GetlistEmComponent', () => {
  let component: GetlistEmComponent;
  let fixture: ComponentFixture<GetlistEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistEmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
