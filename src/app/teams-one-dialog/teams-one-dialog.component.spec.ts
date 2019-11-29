import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsOneDialogComponent } from './teams-one-dialog.component';

describe('TeamsOneDialogComponent', () => {
  let component: TeamsOneDialogComponent;
  let fixture: ComponentFixture<TeamsOneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsOneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsOneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
