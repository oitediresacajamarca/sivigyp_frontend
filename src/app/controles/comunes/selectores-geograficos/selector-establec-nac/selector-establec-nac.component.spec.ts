import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEstablecNacComponent } from './selector-establec-nac.component';

describe('SelectorEstablecNacComponent', () => {
  let component: SelectorEstablecNacComponent;
  let fixture: ComponentFixture<SelectorEstablecNacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorEstablecNacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEstablecNacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
