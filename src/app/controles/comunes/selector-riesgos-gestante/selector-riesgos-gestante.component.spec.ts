import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorRiesgosGestanteComponent } from './selector-riesgos-gestante.component';

describe('SelectorRiesgosGestanteComponent', () => {
  let component: SelectorRiesgosGestanteComponent;
  let fixture: ComponentFixture<SelectorRiesgosGestanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorRiesgosGestanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorRiesgosGestanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
