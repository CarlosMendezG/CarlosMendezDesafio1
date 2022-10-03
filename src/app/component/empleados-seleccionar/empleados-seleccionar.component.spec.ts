import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosSeleccionarComponent } from './empleados-seleccionar.component';

describe('EmpleadosSeleccionarComponent', () => {
  let component: EmpleadosSeleccionarComponent;
  let fixture: ComponentFixture<EmpleadosSeleccionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosSeleccionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosSeleccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
