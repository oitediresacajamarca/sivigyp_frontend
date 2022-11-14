import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprogramarAtencionPuerperioComponent } from './reprogramar-atencion-puerperio.component';

describe('ReprogramarAtencionPuerperioComponent', () => {
  let component: ReprogramarAtencionPuerperioComponent;
  let fixture: ComponentFixture<ReprogramarAtencionPuerperioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprogramarAtencionPuerperioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprogramarAtencionPuerperioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
