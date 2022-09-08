import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTipoSeguroComponent } from './selector-tipo-seguro.component';

describe('SelectorTipoSeguroComponent', () => {
  let component: SelectorTipoSeguroComponent;
  let fixture: ComponentFixture<SelectorTipoSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorTipoSeguroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTipoSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
