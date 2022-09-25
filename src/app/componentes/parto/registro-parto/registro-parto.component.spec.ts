import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPartoComponent } from './registro-parto.component';

describe('RegistroPartoComponent', () => {
  let component: RegistroPartoComponent;
  let fixture: ComponentFixture<RegistroPartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
