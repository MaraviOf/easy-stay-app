import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEditComponent } from './re-edit.component';

describe('ReEditComponent', () => {
  let component: ReEditComponent;
  let fixture: ComponentFixture<ReEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReEditComponent]
    });
    fixture = TestBed.createComponent(ReEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
