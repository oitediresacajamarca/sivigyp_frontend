import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorGrupoSanguinioComponent } from './selector-grupo-sanguinio.component';

describe('SelectorGrupoSanguinioComponent', () => {
  let component: SelectorGrupoSanguinioComponent;
  let fixture: ComponentFixture<SelectorGrupoSanguinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorGrupoSanguinioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorGrupoSanguinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
