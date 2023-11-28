import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHaComponent } from './read-ha.component';

describe('ReadHaComponent', () => {
  let component: ReadHaComponent;
  let fixture: ComponentFixture<ReadHaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadHaComponent]
    });
    fixture = TestBed.createComponent(ReadHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
