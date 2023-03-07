import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuitemComponent } from './show-menuitem.component';

describe('ShowMenuitemComponent', () => {
  let component: ShowMenuitemComponent;
  let fixture: ComponentFixture<ShowMenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
