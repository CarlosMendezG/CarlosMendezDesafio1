import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosInicioComponent } from './empleados-inicio.component';

describe('EmpleadosInicioComponent', () => {
  let component: EmpleadosInicioComponent;
  let fixture: ComponentFixture<EmpleadosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
