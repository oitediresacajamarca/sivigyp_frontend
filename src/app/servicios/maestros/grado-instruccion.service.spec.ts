import { TestBed } from '@angular/core/testing';

import { GradoInstruccionService } from './grado-instruccion.service';

describe('GradoInstruccionService', () => {
  let service: GradoInstruccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoInstruccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
