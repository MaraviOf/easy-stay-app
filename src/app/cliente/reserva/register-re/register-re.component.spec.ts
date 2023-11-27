import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReComponent } from './register-re.component';

describe('RegisterReComponent', () => {
  let component: RegisterReComponent;
  let fixture: ComponentFixture<RegisterReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterReComponent]
    });
    fixture = TestBed.createComponent(RegisterReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
