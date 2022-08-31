import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonaHcComponent } from './buscar-persona-hc.component';

describe('BuscarPersonaHcComponent', () => {
  let component: BuscarPersonaHcComponent;
  let fixture: ComponentFixture<BuscarPersonaHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPersonaHcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPersonaHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
