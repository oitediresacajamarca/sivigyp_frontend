import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestantesListadoComponent } from './gestantes-listado.component';

describe('GestantesListadoComponent', () => {
  let component: GestantesListadoComponent;
  let fixture: ComponentFixture<GestantesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestantesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestantesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
