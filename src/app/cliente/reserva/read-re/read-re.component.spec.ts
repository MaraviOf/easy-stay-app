import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadReComponent } from './read-re.component';

describe('ReadReComponent', () => {
  let component: ReadReComponent;
  let fixture: ComponentFixture<ReadReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadReComponent]
    });
    fixture = TestBed.createComponent(ReadReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
