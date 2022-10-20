import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRxjsCardsComponent } from './empleados-rxjs-cards.component';

describe('EmpleadosRxjsCardsComponent', () => {
  let component: EmpleadosRxjsCardsComponent;
  let fixture: ComponentFixture<EmpleadosRxjsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosRxjsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRxjsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
