import { TestBed } from '@angular/core/testing';

import { SeguimientoSiviService } from './seguimiento-sivi.service';

describe('SeguimientoSiviService', () => {
  let service: SeguimientoSiviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientoSiviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
