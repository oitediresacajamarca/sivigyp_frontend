import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteGestanteGeneradorComponent } from './reporte-gestante-generador.component';

describe('ReporteGestanteGeneradorComponent', () => {
  let component: ReporteGestanteGeneradorComponent;
  let fixture: ComponentFixture<ReporteGestanteGeneradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteGestanteGeneradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteGestanteGeneradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
