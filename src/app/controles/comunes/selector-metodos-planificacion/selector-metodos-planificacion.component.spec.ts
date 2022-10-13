import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMetodosPlanificacionComponent } from './selector-metodos-planificacion.component';

describe('SelectorMetodosPlanificacionComponent', () => {
  let component: SelectorMetodosPlanificacionComponent;
  let fixture: ComponentFixture<SelectorMetodosPlanificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorMetodosPlanificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorMetodosPlanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
