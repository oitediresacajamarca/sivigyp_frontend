import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionPfComponent } from './atencion-pf.component';

describe('AtencionPfComponent', () => {
  let component: AtencionPfComponent;
  let fixture: ComponentFixture<AtencionPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
