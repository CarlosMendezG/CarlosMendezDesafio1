import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CarlosMendezDesafio1';

  public empleados: Empleados[] = [
    new Empleados(1, "Juan Gutierrez", "XEXX-000530-AW1", new Date(2020, 1, 2), undefined, true),
    new Empleados(2, "Pedro Perez", "PEPE-851225-QA8", new Date(2020, 3, 2), undefined, true),
    new Empleados(3, "Luis Lopez", "WEE1544", new Date(2021, 3, 2), new Date(2022, 1, 2), false),
    new Empleados(4, "Maria Kiwi", "KIWI0570", new Date(2021, 4, 3), undefined, true),
    new Empleados(5, "Cassandra Jimenez", "CASEWE2058", new Date(2021, 5, 6), new Date(2022, 2, 3), false)
  ];
  public empleadosSeleccionados: Empleados[] = [];
  public seleccionarEmpleado(empleadosSeleccionados1: Empleados[]) {
    this.empleadosSeleccionados = empleadosSeleccionados1;
  }

  public empleadosModificado(empleado: Empleados) {
    if (!empleado) return;
    if (empleado.id == 0) {
      let i = this.empleados.length - 1;
      empleado.id = this.empleados[i].id + 1;
      this.empleados.push(empleado);
      this.empleado = empleado;
      return;
    }
    let index = this.empleados.findIndex(x => x.id == empleado.id);
    this.empleados[index] = empleado;
    this.empleado = empleado;
  }

  public empleado: Empleados | undefined = this.empleados[0];
  public editarEmpleado(cambioEmpleadoId: number) {
    let empleados = this.empleados.filter(x => x.id == cambioEmpleadoId);
    this.empleado = undefined;
    if (empleados && empleados.length > 0) {
      this.empleado = empleados[0];
    }
    if (!this.empleado) {
      this.empleado = new Empleados(0, '', '', new Date(), undefined, true);
    }
    this.menuSeleccionadoEmpleados = "Empleados";
  }

  public menuSeleccionadoEmpleados: string = "ListadoEmpleados";
  public cambioMenuEmpleadosSeleccionado(menuEmpleados: string) {
    if (!this.empleado) {
      this.empleado = new Empleados(0, '', '', new Date(), undefined, true);
    }
    this.menuSeleccionadoEmpleados = menuEmpleados;
  }

  public mostrarDatosEmpleados: boolean = false;
  public cambioMostrarDatosEmpleados(mostrarDatos: boolean) {
    this.mostrarDatosEmpleados = mostrarDatos;
  }
}
