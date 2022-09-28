import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativoHisComponent } from './comparativo-his.component';

describe('ComparativoHisComponent', () => {
  let component: ComparativoHisComponent;
  let fixture: ComponentFixture<ComparativoHisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativoHisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativoHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
