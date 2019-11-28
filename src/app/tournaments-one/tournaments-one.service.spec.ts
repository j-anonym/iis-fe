import { TestBed } from '@angular/core/testing';

import { TournamentsOneService } from './tournaments-one.service';

describe('TournamentsOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentsOneService = TestBed.get(TournamentsOneService);
    expect(service).toBeTruthy();
  });
});
