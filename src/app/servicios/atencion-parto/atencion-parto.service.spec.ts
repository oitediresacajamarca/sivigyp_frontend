import { TestBed } from '@angular/core/testing';

import { AtencionPartoService } from './atencion-parto.service';

describe('AtencionPartoService', () => {
  let service: AtencionPartoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtencionPartoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
