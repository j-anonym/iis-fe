import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsTreeMatchComponent } from './tournaments-tree-match.component';

describe('TournamentsTreeMatchComponent', () => {
  let component: TournamentsTreeMatchComponent;
  let fixture: ComponentFixture<TournamentsTreeMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsTreeMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsTreeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
