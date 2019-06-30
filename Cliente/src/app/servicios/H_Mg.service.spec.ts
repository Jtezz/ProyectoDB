import { TestBed } from '@angular/core/testing';

import { H_MgService } from './H_Mg.service';

describe('H_Mgservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: H_MgService = TestBed.get(H_MgService);
    expect(service).toBeTruthy();
  });
});