import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent } from './fitros-departamento-provincia-distrito-establec-nacional.component';

describe('FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent', () => {
  let component: FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent;
  let fixture: ComponentFixture<FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
