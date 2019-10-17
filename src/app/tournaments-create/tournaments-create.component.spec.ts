import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsCreateComponent } from './tournaments-create.component';

describe('TournamentsCreateComponent', () => {
  let component: TournamentsCreateComponent;
  let fixture: ComponentFixture<TournamentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
