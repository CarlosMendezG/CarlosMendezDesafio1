import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmpleadosComponent } from './menu-empleados.component';

describe('MenuEmpleadosComponent', () => {
  let component: MenuEmpleadosComponent;
  let fixture: ComponentFixture<MenuEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
