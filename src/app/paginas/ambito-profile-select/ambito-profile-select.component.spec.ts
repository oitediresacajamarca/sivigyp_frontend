import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoProfileSelectComponent } from './ambito-profile-select.component';

describe('AmbitoProfileSelectComponent', () => {
  let component: AmbitoProfileSelectComponent;
  let fixture: ComponentFixture<AmbitoProfileSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbitoProfileSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoProfileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
