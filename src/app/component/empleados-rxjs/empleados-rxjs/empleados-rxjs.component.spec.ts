import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRxjsComponent } from './empleados-rxjs.component';

describe('EmpleadosRxjsComponent', () => {
  let component: EmpleadosRxjsComponent;
  let fixture: ComponentFixture<EmpleadosRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
