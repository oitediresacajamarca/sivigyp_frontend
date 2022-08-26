import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAtencionesComponent } from './listado-atenciones.component';

describe('ListadoAtencionesComponent', () => {
  let component: ListadoAtencionesComponent;
  let fixture: ComponentFixture<ListadoAtencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAtencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAtencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
