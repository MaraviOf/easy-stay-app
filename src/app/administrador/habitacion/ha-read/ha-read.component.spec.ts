import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaReadComponent } from './ha-read.component';

describe('HaReadComponent', () => {
  let component: HaReadComponent;
  let fixture: ComponentFixture<HaReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaReadComponent]
    });
    fixture = TestBed.createComponent(HaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
