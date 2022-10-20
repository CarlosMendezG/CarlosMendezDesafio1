import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRxjsMenuComponent } from './empleados-rxjs-menu.component';

describe('EmpleadosRxjsMenuComponent', () => {
  let component: EmpleadosRxjsMenuComponent;
  let fixture: ComponentFixture<EmpleadosRxjsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosRxjsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRxjsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
