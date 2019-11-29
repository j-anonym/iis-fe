import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsManageComponent } from './teams-manage.component';

describe('TeamsManageComponent', () => {
  let component: TeamsManageComponent;
  let fixture: ComponentFixture<TeamsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
