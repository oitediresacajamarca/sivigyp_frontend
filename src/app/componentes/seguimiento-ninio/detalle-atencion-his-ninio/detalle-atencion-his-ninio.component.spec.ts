import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAtencionHisNinioComponent } from './detalle-atencion-his-ninio.component';

describe('DetalleAtencionHisNinioComponent', () => {
  let component: DetalleAtencionHisNinioComponent;
  let fixture: ComponentFixture<DetalleAtencionHisNinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAtencionHisNinioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAtencionHisNinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
