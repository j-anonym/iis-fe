import { TestBed } from '@angular/core/testing';

import { TournamentsAllService } from './tournaments-all.service';

describe('TournamentsAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentsAllService = TestBed.get(TournamentsAllService);
    expect(service).toBeTruthy();
  });
});
