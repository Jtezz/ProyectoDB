import { TestBed } from '@angular/core/testing';

import { BuscarmedicoService } from './buscarmedico.service';

describe('BuscarmedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscarmedicoService = TestBed.get(BuscarmedicoService);
    expect(service).toBeTruthy();
  });
});
