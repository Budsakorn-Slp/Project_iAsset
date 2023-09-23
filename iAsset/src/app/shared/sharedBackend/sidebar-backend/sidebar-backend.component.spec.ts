import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBackendComponent } from './sidebar-backend.component';

describe('SidebarBackendComponent', () => {
  let component: SidebarBackendComponent;
  let fixture: ComponentFixture<SidebarBackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarBackendComponent]
    });
    fixture = TestBed.createComponent(SidebarBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
