import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackendComponent } from './header-backend.component';

describe('HeaderBackendComponent', () => {
  let component: HeaderBackendComponent;
  let fixture: ComponentFixture<HeaderBackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBackendComponent]
    });
    fixture = TestBed.createComponent(HeaderBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
