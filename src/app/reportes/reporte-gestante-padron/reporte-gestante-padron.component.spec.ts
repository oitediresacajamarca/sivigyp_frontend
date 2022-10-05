import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteGestantePadronComponent } from './reporte-gestante-padron.component';

describe('ReporteGestantePadronComponent', () => {
  let component: ReporteGestantePadronComponent;
  let fixture: ComponentFixture<ReporteGestantePadronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteGestantePadronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteGestantePadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
