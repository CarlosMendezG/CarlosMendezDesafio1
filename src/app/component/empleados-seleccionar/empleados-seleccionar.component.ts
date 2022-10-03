import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados-seleccionar',
  templateUrl: './empleados-seleccionar.component.html',
  styleUrls: ['./empleados-seleccionar.component.css']
})
export class EmpleadosSeleccionarComponent implements OnInit {

  constructor() { }

  @Input()
  public empleadosOrigen: Empleados[] = [];

  @Output()
  public empleadosSeleccionados = new EventEmitter<Empleados[]>();

  public empleados: Empleados[] = this.empleadosOrigen;
  public verFiltros: boolean = false;
  public verTodos: boolean = true;
  public sinBajas: boolean = false;
  public soloBajas: boolean = false;
  public todosEmpleados: boolean = false;
  public seleccionarTodo() {
    this.empleados.forEach(empleado => {
      empleado.seleccionado = this.todosEmpleados;
    });
  }

  // public deFechaATexto(fechaTexto: string) {
  //   if (!fechaTexto) return '-';
  //   let fecha: Date = fechaTexto(fechaTexto, false);
  //   return formatDate(fecha, 'dd MMM yyyy HH:mm:ss', 'es-MX').replace('.', '');
  // }

  public verificarObjeto<T>(objeto: T): string {
    if (objeto instanceof Empleados) {
      return `Es un objeto de tipo Empleados. Empleado Id: ${objeto.id} Nombre: ${objeto.nombre}`;
      // } if (objeto[0] instanceof Empleados[]) { // no permite arrays
      //   return ``;
    } else {
      return "Tipo desconocido";
    }
  }

  public cargarTodosEmpleados() {
    this.soloBajas = false;
    this.sinBajas = false;
    this.empleados = this.empleadosOrigen;
    this.empleados.forEach(x => x.seleccionado = x.esActivo);
  }

  public noMostrarBajas() {
    this.soloBajas = false;
    this.sinBajas = true;
    this.empleados.forEach(x => x.seleccionado = !x.esBaja);
    // this.empleados = this.empleadosOrigen.filter(x => x.esActivo);
  }

  public soloMostrarBajas() {
    this.soloBajas = true;
    this.sinBajas = false;
    this.empleados.forEach(x => x.seleccionado = x.esBaja);
    // this.empleados = this.empleadosOrigen.filter(x => x.esBaja);
  }

  public soloSeleccionados() {
    this.soloBajas = false;
    this.sinBajas = false;
    this.empleados = this.empleadosOrigen.filter(x => x.seleccionado);
  }

  public seleccionarEmpleados() {
    let empleadosSeleccionados: Empleados[] = this.empleados.filter(x => x.seleccionado);
    this.empleadosSeleccionados.emit(empleadosSeleccionados);
  }

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

  ngOnInit(): void {
    this.todosEmpleados = false;
    this.verFiltros = false;
    this.empleados = this.empleadosOrigen;

    console.log(this.verificarObjeto(this.empleados));
    console.log(this.verificarObjeto(this.empleados[0]));
  }

}
