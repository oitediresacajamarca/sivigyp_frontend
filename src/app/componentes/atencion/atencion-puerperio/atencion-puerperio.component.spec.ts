import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionPuerperioComponent } from './atencion-puerperio.component';

describe('AtencionPuerperioComponent', () => {
  let component: AtencionPuerperioComponent;
  let fixture: ComponentFixture<AtencionPuerperioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionPuerperioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionPuerperioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
