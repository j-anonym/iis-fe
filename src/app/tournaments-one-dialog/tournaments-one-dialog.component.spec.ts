import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsOneDialogComponent } from './tournaments-one-dialog.component';

describe('TournamentsOneDialogComponent', () => {
  let component: TournamentsOneDialogComponent;
  let fixture: ComponentFixture<TournamentsOneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsOneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsOneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
