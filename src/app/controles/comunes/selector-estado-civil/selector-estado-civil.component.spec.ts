import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEstadoCivilComponent } from './selector-estado-civil.component';

describe('SelectorEstadoCivilComponent', () => {
  let component: SelectorEstadoCivilComponent;
  let fixture: ComponentFixture<SelectorEstadoCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorEstadoCivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEstadoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
