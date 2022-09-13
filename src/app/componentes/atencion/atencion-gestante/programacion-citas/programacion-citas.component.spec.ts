import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCitasComponent } from './programacion-citas.component';

describe('ProgramacionCitasComponent', () => {
  let component: ProgramacionCitasComponent;
  let fixture: ComponentFixture<ProgramacionCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
