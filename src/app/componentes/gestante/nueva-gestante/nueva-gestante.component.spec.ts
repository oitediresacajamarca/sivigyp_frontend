import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaGestanteComponent } from './nueva-gestante.component';

describe('NuevaGestanteComponent', () => {
  let component: NuevaGestanteComponent;
  let fixture: ComponentFixture<NuevaGestanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaGestanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaGestanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
