import { TestBed } from '@angular/core/testing';

import { EstablecimientosNacService } from './establecimientos-nac.service';

describe('EstablecimientosNacService', () => {
  let service: EstablecimientosNacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablecimientosNacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
