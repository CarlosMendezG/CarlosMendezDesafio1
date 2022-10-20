import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-inicio',
  templateUrl: './empleados-inicio.component.html',
  styleUrls: ['./empleados-inicio.component.css']
})
export class EmpleadosInicioComponent implements OnInit {

  constructor(
    private empleadosService: EmpleadosService
  ) {
    this.empleadosSubscription = empleadosService.obtenerEmpleadosObservable().subscribe({
      next: (empleados: Empleados[]) => {
        this.empleados = empleados;
        console.log(`Empleados cargados Observable: ${this.empleados}`);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  private empleadosSubscription: Subscription;
  public empleados: Empleados[] = [];
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

  public mostrarDatosEmpleados: boolean = true;
  public cambioMostrarDatosEmpleados(mostrarDatos: boolean) {
    this.mostrarDatosEmpleados = mostrarDatos;
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.empleadosSubscription.unsubscribe();
  }
}
