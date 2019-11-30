import { TestBed } from '@angular/core/testing';

import { TeamsOneService } from './teams-one.service';

describe('TeamsOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsOneService = TestBed.get(TeamsOneService);
    expect(service).toBeTruthy();
  });
});
