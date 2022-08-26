import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalNotificacionesComponent } from './principal-notificaciones.component';

describe('PrincipalNotificacionesComponent', () => {
  let component: PrincipalNotificacionesComponent;
  let fixture: ComponentFixture<PrincipalNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalNotificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
