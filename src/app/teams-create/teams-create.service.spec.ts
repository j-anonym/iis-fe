import { TestBed } from '@angular/core/testing';

import { TeamsCreateService } from './teams-create.service';

describe('TeamsCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsCreateService = TestBed.get(TeamsCreateService);
    expect(service).toBeTruthy();
  });
});
