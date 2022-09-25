import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorIdiomaComponent } from './selector-idioma.component';

describe('SelectorIdiomaComponent', () => {
  let component: SelectorIdiomaComponent;
  let fixture: ComponentFixture<SelectorIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorIdiomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
