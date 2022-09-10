import { TestBed } from '@angular/core/testing';

import { AtencionGestanteService } from './atencion-gestante.service';

describe('AtencionGestanteService', () => {
  let service: AtencionGestanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtencionGestanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
