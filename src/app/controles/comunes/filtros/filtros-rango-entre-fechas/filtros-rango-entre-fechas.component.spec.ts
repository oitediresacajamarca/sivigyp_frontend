import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosRangoEntreFechasComponent } from './filtros-rango-entre-fechas.component';

describe('FiltrosRangoEntreFechasComponent', () => {
  let component: FiltrosRangoEntreFechasComponent;
  let fixture: ComponentFixture<FiltrosRangoEntreFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosRangoEntreFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosRangoEntreFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
