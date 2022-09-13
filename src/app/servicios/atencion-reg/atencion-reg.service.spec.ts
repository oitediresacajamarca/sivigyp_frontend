import { TestBed } from '@angular/core/testing';

import { AtencionRegService } from './atencion-reg.service';

describe('AtencionRegService', () => {
  let service: AtencionRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtencionRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
