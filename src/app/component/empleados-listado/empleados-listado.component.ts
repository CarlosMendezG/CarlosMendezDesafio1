import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados-listado',
  templateUrl: './empleados-listado.component.html',
  styleUrls: ['./empleados-listado.component.css']
})
export class EmpleadosListadoComponent implements OnInit {

  constructor() { }

  @Input()
  public empleadosOrigen: Empleados[] = [];

  public empleados: Empleados[] = this.empleadosOrigen;
  public verFiltros: boolean = false;
  public verTodos: boolean = true;
  public sinBajas: boolean = false;
  public soloBajas: boolean = false;
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

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

  ngOnInit(): void {
    this.verFiltros = false;
    this.empleados = this.empleadosOrigen;
  }

}
