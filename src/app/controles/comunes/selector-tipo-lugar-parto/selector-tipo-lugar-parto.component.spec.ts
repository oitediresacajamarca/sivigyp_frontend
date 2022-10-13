import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTipoLugarPartoComponent } from './selector-tipo-lugar-parto.component';

describe('SelectorTipoLugarPartoComponent', () => {
  let component: SelectorTipoLugarPartoComponent;
  let fixture: ComponentFixture<SelectorTipoLugarPartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorTipoLugarPartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTipoLugarPartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
