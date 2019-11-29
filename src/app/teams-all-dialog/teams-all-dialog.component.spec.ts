import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAllDialogComponent } from './teams-all-dialog.component';

describe('TeamsAllDialogComponent', () => {
  let component: TeamsAllDialogComponent;
  let fixture: ComponentFixture<TeamsAllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsAllDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
