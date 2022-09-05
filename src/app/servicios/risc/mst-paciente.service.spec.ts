import { TestBed } from '@angular/core/testing';

import { MstPacienteService } from './mst-paciente.service';

describe('MstPacienteService', () => {
  let service: MstPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MstPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
