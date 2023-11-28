import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReReadComponent } from './re-read.component';

describe('ReReadComponent', () => {
  let component: ReReadComponent;
  let fixture: ComponentFixture<ReReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReReadComponent]
    });
    fixture = TestBed.createComponent(ReReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
