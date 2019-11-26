import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDialogComponent } from './admin-page-dialog.component';

describe('AdminPageDialogComponent', () => {
  let component: AdminPageDialogComponent;
  let fixture: ComponentFixture<AdminPageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
