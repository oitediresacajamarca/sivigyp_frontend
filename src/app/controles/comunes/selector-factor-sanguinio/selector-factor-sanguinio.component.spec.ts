import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFactorSanguinioComponent } from './selector-factor-sanguinio.component';

describe('SelectorFactorSanguinioComponent', () => {
  let component: SelectorFactorSanguinioComponent;
  let fixture: ComponentFixture<SelectorFactorSanguinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorFactorSanguinioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorFactorSanguinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
