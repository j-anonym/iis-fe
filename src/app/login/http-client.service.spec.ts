import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';

describe('HttpclientService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: HttpClientService = TestBed.get(HttpClientService);
        expect(service).toBeTruthy();
    });
});
