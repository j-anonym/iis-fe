import { TestBed } from '@angular/core/testing';

import { TeamsAllService } from './teams-all.service';

describe('TeamsAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsAllService = TestBed.get(TeamsAllService);
    expect(service).toBeTruthy();
  });
});
