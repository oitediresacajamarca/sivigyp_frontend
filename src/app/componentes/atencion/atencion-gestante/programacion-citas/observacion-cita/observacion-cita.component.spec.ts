import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionCitaComponent } from './observacion-cita.component';

describe('ObservacionCitaComponent', () => {
  let component: ObservacionCitaComponent;
  let fixture: ComponentFixture<ObservacionCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservacionCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
