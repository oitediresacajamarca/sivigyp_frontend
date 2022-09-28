import { Test, TestingModule } from '@nestjs/testing';
import { AtencionesPendientesService } from './atenciones-pendientes.service';

describe('AtencionesPendientesService', () => {
  let service: AtencionesPendientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtencionesPendientesService],
    }).compile();

    service = module.get<AtencionesPendientesService>(AtencionesPendientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
