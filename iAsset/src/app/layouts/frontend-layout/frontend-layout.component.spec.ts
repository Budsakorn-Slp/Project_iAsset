import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendLayoutComponent } from './frontend-layout.component';

describe('FrontendLayoutComponent', () => {
  let component: FrontendLayoutComponent;
  let fixture: ComponentFixture<FrontendLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendLayoutComponent]
    });
    fixture = TestBed.createComponent(FrontendLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
