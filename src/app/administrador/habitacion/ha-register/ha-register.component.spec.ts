import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaRegisterComponent } from './ha-register.component';

describe('HaRegisterComponent', () => {
  let component: HaRegisterComponent;
  let fixture: ComponentFixture<HaRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaRegisterComponent]
    });
    fixture = TestBed.createComponent(HaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
