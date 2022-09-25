import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CarlosMendezDesafio1';

  public empleadosSeleccionados: Empleados[] = [];
  public seleccionarEmpleado(empleadosSeleccionados1: Empleados[]) {
    this.empleadosSeleccionados = empleadosSeleccionados1;
  }
}
