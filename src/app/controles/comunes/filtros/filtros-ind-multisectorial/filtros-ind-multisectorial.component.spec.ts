import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosIndMultisectorialComponent } from './filtros-ind-multisectorial.component';

describe('FiltrosIndMultisectorialComponent', () => {
  let component: FiltrosIndMultisectorialComponent;
  let fixture: ComponentFixture<FiltrosIndMultisectorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosIndMultisectorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosIndMultisectorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
