import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDistritoComponent } from './selector-distrito.component';

describe('SelectorDistritoComponent', () => {
  let component: SelectorDistritoComponent;
  let fixture: ComponentFixture<SelectorDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorDistritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
