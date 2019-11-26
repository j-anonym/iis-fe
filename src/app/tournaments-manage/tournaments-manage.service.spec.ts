import { TestBed } from '@angular/core/testing';

import { TournamentsManageService } from './tournaments-manage.service';

describe('TournamentsManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentsManageService = TestBed.get(TournamentsManageService);
    expect(service).toBeTruthy();
  });
});
