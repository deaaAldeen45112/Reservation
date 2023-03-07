import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuItemComponent } from './show-menu-item.component';

describe('ShowMenuItemComponent', () => {
  let component: ShowMenuItemComponent;
  let fixture: ComponentFixture<ShowMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
