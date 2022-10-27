import { TestBed } from '@angular/core/testing';

import { MultisectorialService } from './multisectorial.service';

describe('MultisectorialService', () => {
  let service: MultisectorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultisectorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
