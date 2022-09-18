import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorRiesgoComponent } from './selector-riesgo.component';

describe('SelectorRiesgoComponent', () => {
  let component: SelectorRiesgoComponent;
  let fixture: ComponentFixture<SelectorRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
