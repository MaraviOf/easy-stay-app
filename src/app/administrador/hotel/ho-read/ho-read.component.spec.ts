import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoReadComponent } from './ho-read.component';

describe('HoReadComponent', () => {
  let component: HoReadComponent;
  let fixture: ComponentFixture<HoReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoReadComponent]
    });
    fixture = TestBed.createComponent(HoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
