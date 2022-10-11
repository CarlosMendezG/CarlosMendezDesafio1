import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosResultadoComponent } from './empleados-resultado.component';

describe('EmpleadosResultadoComponent', () => {
  let component: EmpleadosResultadoComponent;
  let fixture: ComponentFixture<EmpleadosResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
