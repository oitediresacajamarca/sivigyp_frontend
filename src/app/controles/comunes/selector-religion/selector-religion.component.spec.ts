import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorReligionComponent } from './selector-religion.component';

describe('SelectorReligionComponent', () => {
  let component: SelectorReligionComponent;
  let fixture: ComponentFixture<SelectorReligionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorReligionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
