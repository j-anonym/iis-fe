import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsManageComponent } from './tournaments-manage.component';

describe('TournamentsManageComponent', () => {
  let component: TournamentsManageComponent;
  let fixture: ComponentFixture<TournamentsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
