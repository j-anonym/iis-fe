import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsAllComponent } from './tournaments-all.component';

describe('TournamentsAllComponent', () => {
  let component: TournamentsAllComponent;
  let fixture: ComponentFixture<TournamentsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
