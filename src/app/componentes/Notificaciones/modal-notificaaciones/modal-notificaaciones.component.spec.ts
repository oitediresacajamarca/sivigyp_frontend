import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotificaacionesComponent } from './modal-notificaaciones.component';

describe('ModalNotificaacionesComponent', () => {
  let component: ModalNotificaacionesComponent;
  let fixture: ComponentFixture<ModalNotificaacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNotificaacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotificaacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
