import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCardsComponent } from './empleados-cards.component';

describe('EmpleadosCardsComponent', () => {
  let component: EmpleadosCardsComponent;
  let fixture: ComponentFixture<EmpleadosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
