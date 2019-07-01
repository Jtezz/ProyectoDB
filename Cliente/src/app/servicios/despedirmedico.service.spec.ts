import { TestBed } from '@angular/core/testing';

import { DespedirmedicoService } from './despedirmedico.service';

describe('DespedirmedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespedirmedicoService = TestBed.get(DespedirmedicoService);
    expect(service).toBeTruthy();
  });
});
