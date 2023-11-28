import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoEditComponent } from './ho-edit.component';

describe('HoEditComponent', () => {
  let component: HoEditComponent;
  let fixture: ComponentFixture<HoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoEditComponent]
    });
    fixture = TestBed.createComponent(HoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
