import { TestBed } from '@angular/core/testing';

import { TournamentsCreateService } from './tournaments-create.service';

describe('TournamentsCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentsCreateService = TestBed.get(TournamentsCreateService);
    expect(service).toBeTruthy();
  });
});
