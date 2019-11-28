import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsOneComponent } from './tournaments-one.component';

describe('TournamentsOneComponent', () => {
  let component: TournamentsOneComponent;
  let fixture: ComponentFixture<TournamentsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
