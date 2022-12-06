import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCitaPuerperioComponent } from './agregar-cita-puerperio.component';

describe('AgregarCitaPuerperioComponent', () => {
  let component: AgregarCitaPuerperioComponent;
  let fixture: ComponentFixture<AgregarCitaPuerperioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCitaPuerperioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCitaPuerperioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
