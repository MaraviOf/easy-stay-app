import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoRegisterComponent } from './ho-register.component';

describe('HoRegisterComponent', () => {
  let component: HoRegisterComponent;
  let fixture: ComponentFixture<HoRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoRegisterComponent]
    });
    fixture = TestBed.createComponent(HoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
