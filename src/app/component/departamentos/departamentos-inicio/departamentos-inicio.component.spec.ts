import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosInicioComponent } from './departamentos-inicio.component';

describe('DepartamentosInicioComponent', () => {
  let component: DepartamentosInicioComponent;
  let fixture: ComponentFixture<DepartamentosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentosInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
