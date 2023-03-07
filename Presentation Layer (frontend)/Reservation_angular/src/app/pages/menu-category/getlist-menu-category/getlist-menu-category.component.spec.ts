import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistMenuCategoryComponent } from './getlist-menu-category.component';

describe('GetlistMenuCategoryComponent', () => {
  let component: GetlistMenuCategoryComponent;
  let fixture: ComponentFixture<GetlistMenuCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistMenuCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
