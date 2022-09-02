import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCentroPobladoComponent } from './selector-centro-poblado.component';

describe('SelectorCentroPobladoComponent', () => {
  let component: SelectorCentroPobladoComponent;
  let fixture: ComponentFixture<SelectorCentroPobladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorCentroPobladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorCentroPobladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
