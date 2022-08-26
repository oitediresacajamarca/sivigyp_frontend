import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaginaComponent } from './menu-pagina.component';

describe('MenuPaginaComponent', () => {
  let component: MenuPaginaComponent;
  let fixture: ComponentFixture<MenuPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
