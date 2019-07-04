import { TestBed } from '@angular/core/testing';

import { ActualizarDispService } from './actualizar-disp.service';

describe('ActualizarDispService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualizarDispService = TestBed.get(ActualizarDispService);
    expect(service).toBeTruthy();
  });
});
