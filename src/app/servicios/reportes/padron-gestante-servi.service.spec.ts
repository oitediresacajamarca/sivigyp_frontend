import { TestBed } from '@angular/core/testing';

import { PadronGestanteServiService } from './padron-gestante-servi.service';

describe('PadronGestanteServiService', () => {
  let service: PadronGestanteServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadronGestanteServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
