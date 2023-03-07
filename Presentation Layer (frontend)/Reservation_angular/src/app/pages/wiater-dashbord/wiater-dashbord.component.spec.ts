import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiaterDashbordComponent } from './wiater-dashbord.component';

describe('WiaterDashbordComponent', () => {
  let component: WiaterDashbordComponent;
  let fixture: ComponentFixture<WiaterDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiaterDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiaterDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
