import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendLayoutComponent } from './backend-layout.component';

describe('BackendLayoutComponent', () => {
  let component: BackendLayoutComponent;
  let fixture: ComponentFixture<BackendLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendLayoutComponent]
    });
    fixture = TestBed.createComponent(BackendLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
