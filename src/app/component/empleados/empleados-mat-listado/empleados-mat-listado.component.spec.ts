import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosMatListadoComponent } from './empleados-mat-listado.component';

describe('EmpleadosMatListadoComponent', () => {
  let component: EmpleadosMatListadoComponent;
  let fixture: ComponentFixture<EmpleadosMatListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosMatListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosMatListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
