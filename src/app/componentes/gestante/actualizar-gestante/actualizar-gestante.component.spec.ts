import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGestanteComponent } from './actualizar-gestante.component';

describe('ActualizarGestanteComponent', () => {
  let component: ActualizarGestanteComponent;
  let fixture: ComponentFixture<ActualizarGestanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGestanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGestanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
