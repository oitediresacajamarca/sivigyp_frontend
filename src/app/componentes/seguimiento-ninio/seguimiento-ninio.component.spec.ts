import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoNinioComponent } from './seguimiento-ninio.component';

describe('SeguimientoNinioComponent', () => {
  let component: SeguimientoNinioComponent;
  let fixture: ComponentFixture<SeguimientoNinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoNinioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoNinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
