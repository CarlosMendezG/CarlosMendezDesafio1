import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-rxjs-inicio',
  templateUrl: './empleados-rxjs-inicio.component.html',
  styleUrls: ['./empleados-rxjs-inicio.component.css']
})
export class EmpleadosRxjsInicioComponent implements OnInit {

  constructor(
    private empleadosService: EmpleadosService
  ) {
    this.empleadosSubscription = empleadosService.obtenerEmpleadosBehaviorSubject().subscribe({
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
  public empleados$: Observable<Empleados[]> = this.empleadosService.obtenerEmpleadosBehaviorSubject();

  public empleado: Empleados | undefined = this.empleados[0];
  public editarEmpleado(empleadoActual: number) {
    this.empleadosService.empleadoSeleccionado = empleadoActual;
    this.menuSeleccionadoEmpleados = "Empleados";
  }
  public menuSeleccionadoEmpleados: string = "ListadoMatEmpleados";
  public cambioMenuEmpleadosSeleccionado(menuEmpleados: string) {
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
