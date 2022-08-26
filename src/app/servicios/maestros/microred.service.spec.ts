import { TestBed } from '@angular/core/testing';

import { MicroredService } from './microred.service';

describe('MicroredService', () => {
  let service: MicroredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
