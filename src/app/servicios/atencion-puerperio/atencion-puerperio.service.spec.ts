import { TestBed } from '@angular/core/testing';

import { AtencionPuerperioService } from './atencion-puerperio.service';

describe('AtencionPuerperioService', () => {
  let service: AtencionPuerperioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtencionPuerperioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
