import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageEditDialogComponent } from './admin-page-edit-dialog.component';

describe('AdminPageEditDialogComponent', () => {
  let component: AdminPageEditDialogComponent;
  let fixture: ComponentFixture<AdminPageEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
