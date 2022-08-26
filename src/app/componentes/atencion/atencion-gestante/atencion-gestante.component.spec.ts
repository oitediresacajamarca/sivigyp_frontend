import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionGestanteComponent } from './atencion-gestante.component';

describe('AtencionGestanteComponent', () => {
  let component: AtencionGestanteComponent;
  let fixture: ComponentFixture<AtencionGestanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionGestanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionGestanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
