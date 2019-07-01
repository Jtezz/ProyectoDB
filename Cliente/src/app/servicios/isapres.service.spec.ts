import { TestBed } from '@angular/core/testing';

import { IsapresService } from './isapres.service';

describe('IsapresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsapresService = TestBed.get(IsapresService);
    expect(service).toBeTruthy();
  });
});
