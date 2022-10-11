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
    new Empleados(1, "Juan Gutierrez", "XEXX-000530-AW1", new Date(2020, 1, 2), undefined, true, "empleado01"),
    new Empleados(2, "Pedro Perez", "PEPE-851225-QA8", new Date(2020, 3, 2), undefined, true, "empleado02"),
    new Empleados(3, "Luis Lopez", "WEE1544", new Date(2021, 3, 2), new Date(2022, 1, 2), false, "empleado03"),
    new Empleados(4, "Maria Kiwi", "KIWI0570", new Date(2021, 4, 3), undefined, true, "empleado04"),
    new Empleados(5, "Cassandra Jimenez", "CASEWE2058", new Date(2021, 5, 6), new Date(2022, 2, 3), false, "empleado05")
  ];
  public empleadosSeleccionados: Empleados[] = [];
  public seleccionarEmpleado(empleadosSeleccionados1: Empleados[]) {
    this.empleadosSeleccionados = empleadosSeleccionados1;
  }

  public empleadosModificado(empleado: Empleados) {
    if (!empleado) return;
    let fechaVerificación: Date = new Date();
    empleado.esBaja = empleado.baja != undefined && fechaVerificación.getTime() > empleado.baja.getTime();
    empleado.esActivo = !empleado.baja && empleado.alta.getTime() <= fechaVerificación.getTime();
    if (empleado.id == 0) {
      let i = this.empleados.length - 1;
      empleado.id = this.empleados[i].id + 1;
      empleado.imagen = `../../../assets/imagenes/empleado${i.toString().padStart(2, "0")}.jpg`;;
      this.empleados.push(empleado);
      this.empleado = empleado;
      return;
    }
    let index = this.empleados.findIndex(x => x.id == empleado.id);
    empleado.imagen = `../../../assets/imagenes/empleado${empleado.id.toString().padStart(2, "0")}.jpg`;;
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
      this.empleado = new Empleados(0, '', '', new Date(), undefined, true, "");
    }
    this.menuSeleccionadoEmpleados = "Empleados";
  }

  public eliminarEmpleado(empleadoAEliminar: number) {
    this.empleados = this.empleados.filter(x => x.id != empleadoAEliminar);
  }

  public menuSeleccionadoEmpleados: string = "ListadoMatEmpleados";
  public cambioMenuEmpleadosSeleccionado(menuEmpleados: string) {
    if (!this.empleado) {
      this.empleado = new Empleados(0, '', '', new Date(), undefined, true, "");
    }
    this.menuSeleccionadoEmpleados = menuEmpleados;
  }

  public mostrarDatosEmpleados: boolean = false;
  public cambioMostrarDatosEmpleados(mostrarDatos: boolean) {
    this.mostrarDatosEmpleados = mostrarDatos;
  }
}
