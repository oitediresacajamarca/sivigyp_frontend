import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorGradosInstruccionComponent } from './selector-grados-instruccion.component';

describe('SelectorGradosInstruccionComponent', () => {
  let component: SelectorGradosInstruccionComponent;
  let fixture: ComponentFixture<SelectorGradosInstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorGradosInstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorGradosInstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
