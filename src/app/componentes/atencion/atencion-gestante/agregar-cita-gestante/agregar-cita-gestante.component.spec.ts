import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCitaGestanteComponent } from './agregar-cita-gestante.component';

describe('AgregarCitaGestanteComponent', () => {
  let component: AgregarCitaGestanteComponent;
  let fixture: ComponentFixture<AgregarCitaGestanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCitaGestanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCitaGestanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
