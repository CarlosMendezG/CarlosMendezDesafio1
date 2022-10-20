import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRxjsListadoComponent } from './empleados-rxjs-listado.component';

describe('EmpleadosRxjsListadoComponent', () => {
  let component: EmpleadosRxjsListadoComponent;
  let fixture: ComponentFixture<EmpleadosRxjsListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosRxjsListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRxjsListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
