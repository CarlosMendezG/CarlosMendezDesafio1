import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados: Empleados[] = [
    new Empleados(1, "Juan Gutierrez", "XEXX-000530-AW1", new Date(2020, 1, 2), undefined, true, "empleado01"),
    new Empleados(2, "Pedro Perez", "PEPE-851225-QA8", new Date(2020, 3, 2), undefined, true, "empleado02"),
    new Empleados(3, "Luis Lopez", "WEE1544", new Date(2021, 3, 2), new Date(2022, 1, 2), false, "empleado03"),
    new Empleados(4, "Maria Kiwi", "KIWI0570", new Date(2021, 4, 3), undefined, true, "empleado04"),
    new Empleados(5, "Cassandra Jimenez", "CASEWE2058", new Date(2021, 5, 6), new Date(2022, 2, 3), false, "empleado05")
  ];

  public empleadoSeleccionado: number = -1;
  private empleados$: Observable<Empleados[]>;  // $ => Observable
  private empleadoSubject: Subject<Empleados[]>;
  private empleadoBehaviorSubject: BehaviorSubject<Empleados[]>;

  constructor() {
    this.empleados$ = new Observable<Empleados[]>((suscriptor) => {
      suscriptor.next(this.empleados);

      // setTimeout(() => {
      //   this.empleados.push();
      // }, 2000);
    })

    this.empleadoSubject = new Subject<Empleados[]>();
    this.empleadoBehaviorSubject = new BehaviorSubject<Empleados[]>(this.empleados);

  }

  obtenerEmpleados(): Empleados[] {
    return this.empleados;
  }

  obtenerEmpleadoActual(): Empleados {
    if (this.empleados.length < 1) return new Empleados(0, "", "", new Date(), new Date(), true, "");
    if (this.empleadoSeleccionado = -1) {
      this.empleadoSeleccionado = this.empleados[0].id;
      return this.empleados[0];
    }
    let index = this.empleados.findIndex(x => x.id == this.empleadoSeleccionado);
    if (index < 0) return new Empleados(0, "", "", new Date(), new Date(), true, "");
    return this.empleados[index];
  }

  agregarEmpleado(empleado: Empleados): Empleados {
    if (!empleado) return new Empleados(0, "", "", new Date(), new Date(), true, "");
    let fechaVerificación: Date = new Date();
    empleado.esBaja = empleado.baja != undefined && fechaVerificación.getTime() > empleado.baja.getTime();
    empleado.esActivo = !empleado.baja && empleado.alta.getTime() <= fechaVerificación.getTime();
    if (empleado.id || empleado.id === 0) {
      let i = this.empleados.length - 1;
      empleado.id = this.empleados[i].id + 1;
      empleado.imagen = `../../../assets/imagenes/empleado${i.toString().padStart(2, "0")}.jpg`;
    }
    this.empleados.push(empleado);
    this.empleadoSubject.next(this.empleados);
    this.empleadoBehaviorSubject.next(this.empleados);
    return empleado;
  }

  eliminarEmpleado(empleadoAEliminar: number) {
    this.empleados = this.empleados.filter(x => x.id != empleadoAEliminar);
    this.empleadoSubject.next(this.empleados);
    this.empleadoBehaviorSubject.next(this.empleados);
  }

  modificarEmpleado(empleado: Empleados) {
    if (!empleado) return;
    let fechaVerificación: Date = new Date();
    empleado.esBaja = empleado.baja != undefined && fechaVerificación.getTime() > empleado.baja.getTime();
    empleado.esActivo = !empleado.baja && empleado.alta.getTime() <= fechaVerificación.getTime();
    let index = this.empleados.findIndex(x => x.id == empleado.id);
    empleado.imagen = `../../../assets/imagenes/empleado${empleado.id.toString().padStart(2, "0")}.jpg`;;
    this.empleados[index] = empleado;
    this.empleadoSubject.next(this.empleados);
    this.empleadoBehaviorSubject.next(this.empleados);
  }

  seleccionarEmpleadosActual(empleadoSeleccionado: number): number {
    this.empleadoSeleccionado = empleadoSeleccionado;
    return this.empleadoSeleccionado;
  }

  obtenerEmpleadosAsync(): Promise<Empleados[]> {
    return new Promise((resolve, reject) => {
      if (this.empleados.length > 0) {
        resolve(this.empleados);
      } else {
        reject({
          codigo: 99,
          mensaje: 'No existen empleados cargados en la base de datos'
        });
      }
    });
  }

  obtenerEmpleadosObservableOf(): Observable<Empleados[]> {
    return of(this.empleados);
  }

  obtenerEmpleadosObservable(): Observable<Empleados[]> {
    return this.empleados$;
  }

  obtenerEmpleadosSubject(): Observable<Empleados[]> {
    this.empleadoSubject.next(this.empleados);
    return this.empleadoSubject.asObservable();
  }

  obtenerEmpleadosBehaviorSubject(): Observable<Empleados[]> {
    return this.empleadoBehaviorSubject.asObservable();
  }
}
