import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaEditComponent } from './ha-edit.component';

describe('HaEditComponent', () => {
  let component: HaEditComponent;
  let fixture: ComponentFixture<HaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaEditComponent]
    });
    fixture = TestBed.createComponent(HaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
