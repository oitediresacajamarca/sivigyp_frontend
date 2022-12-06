import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDepartamentoComponent } from './selector-departamento.component';

describe('SelectorDepartamentoComponent', () => {
  let component: SelectorDepartamentoComponent;
  let fixture: ComponentFixture<SelectorDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
