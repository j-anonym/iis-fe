import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsTreeComponent } from './tournaments-tree.component';

describe('TournamentsTreeComponent', () => {
  let component: TournamentsTreeComponent;
  let fixture: ComponentFixture<TournamentsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
