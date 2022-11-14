import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAtencionPuerperioComponent } from './no-atencion-puerperio.component';

describe('NoAtencionPuerperioComponent', () => {
  let component: NoAtencionPuerperioComponent;
  let fixture: ComponentFixture<NoAtencionPuerperioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAtencionPuerperioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAtencionPuerperioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
