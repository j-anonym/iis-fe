import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsManageDialogComponent } from './tournaments-manage-dialog.component';

describe('TournamentsManageDialogComponent', () => {
  let component: TournamentsManageDialogComponent;
  let fixture: ComponentFixture<TournamentsManageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsManageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsManageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
