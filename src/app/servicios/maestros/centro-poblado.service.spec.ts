import { TestBed } from '@angular/core/testing';

import { CentroPobladoService } from './centro-poblado.service';

describe('CentroPobladoService', () => {
  let service: CentroPobladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroPobladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
