import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsCreateDialogComponent } from './tournaments-create-dialog.component';

describe('TournamentsCreateDialogComponent', () => {
  let component: TournamentsCreateDialogComponent;
  let fixture: ComponentFixture<TournamentsCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
