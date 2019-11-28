import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsAllDialogComponent } from './tournaments-all-dialog.component';

describe('TournamentsAllDialogComponent', () => {
  let component: TournamentsAllDialogComponent;
  let fixture: ComponentFixture<TournamentsAllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsAllDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
