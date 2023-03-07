import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistRoleComponent } from './getlist-role.component';

describe('GetlistRoleComponent', () => {
  let component: GetlistRoleComponent;
  let fixture: ComponentFixture<GetlistRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
