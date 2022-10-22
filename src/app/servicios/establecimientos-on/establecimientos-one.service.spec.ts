import { TestBed } from '@angular/core/testing';

import { EstablecimientosOneService } from './establecimientos-one.service';

describe('EstablecimientosOneService', () => {
  let service: EstablecimientosOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablecimientosOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
