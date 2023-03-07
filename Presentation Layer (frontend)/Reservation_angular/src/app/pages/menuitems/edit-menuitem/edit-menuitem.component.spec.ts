import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuitemComponent } from './edit-menuitem.component';

describe('EditMenuitemComponent', () => {
  let component: EditMenuitemComponent;
  let fixture: ComponentFixture<EditMenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
