import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosRedMicroredIpressComponent } from './filtros-red-microred-ipress.component';

describe('FiltrosRedMicroredIpressComponent', () => {
  let component: FiltrosRedMicroredIpressComponent;
  let fixture: ComponentFixture<FiltrosRedMicroredIpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosRedMicroredIpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosRedMicroredIpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
