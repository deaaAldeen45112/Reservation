import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistMenuitemComponent } from './getlist-menuitem.component';

describe('GetlistMenuitemComponent', () => {
  let component: GetlistMenuitemComponent;
  let fixture: ComponentFixture<GetlistMenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlistMenuitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistMenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
