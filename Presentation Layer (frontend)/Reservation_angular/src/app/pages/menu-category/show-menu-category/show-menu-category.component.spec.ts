import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuCategoryComponent } from './show-menu-category.component';

describe('ShowMenuCategoryComponent', () => {
  let component: ShowMenuCategoryComponent;
  let fixture: ComponentFixture<ShowMenuCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
