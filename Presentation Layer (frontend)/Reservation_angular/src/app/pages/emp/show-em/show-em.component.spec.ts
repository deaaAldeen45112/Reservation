import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmComponent } from './show-em.component';

describe('ShowEmComponent', () => {
  let component: ShowEmComponent;
  let fixture: ComponentFixture<ShowEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
