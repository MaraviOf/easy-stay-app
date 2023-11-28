import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHoComponent } from './read-ho.component';

describe('ReadHoComponent', () => {
  let component: ReadHoComponent;
  let fixture: ComponentFixture<ReadHoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadHoComponent]
    });
    fixture = TestBed.createComponent(ReadHoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
