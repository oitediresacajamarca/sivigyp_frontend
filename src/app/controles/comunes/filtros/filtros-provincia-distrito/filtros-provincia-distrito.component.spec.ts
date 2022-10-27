import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosProvinciaDistritoComponent } from './filtros-provincia-distrito.component';

describe('FiltrosProvinciaDistritoComponent', () => {
  let component: FiltrosProvinciaDistritoComponent;
  let fixture: ComponentFixture<FiltrosProvinciaDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosProvinciaDistritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosProvinciaDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
