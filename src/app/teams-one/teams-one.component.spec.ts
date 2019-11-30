import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsOneComponent } from './teams-one.component';

describe('TeamsOneComponent', () => {
  let component: TeamsOneComponent;
  let fixture: ComponentFixture<TeamsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
