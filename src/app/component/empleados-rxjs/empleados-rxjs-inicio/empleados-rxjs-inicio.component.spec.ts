import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRxjsInicioComponent } from './empleados-rxjs-inicio.component';

describe('EmpleadosRxjsInicioComponent', () => {
  let component: EmpleadosRxjsInicioComponent;
  let fixture: ComponentFixture<EmpleadosRxjsInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosRxjsInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRxjsInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
