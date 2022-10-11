import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados-cards',
  templateUrl: './empleados-cards.component.html',
  styleUrls: ['./empleados-cards.component.css']
})
export class EmpleadosCardsComponent implements OnInit {

  constructor() { }

  @Input()
  public empleadosOrigen: Empleados[] = [];
  public empleados: Empleados[] = [];
  public filtro: string = "";

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

  @Output()
  public eliminarEmpleado = new EventEmitter<number>();
  public eliminarEmpleadoClick(empleadoId: number) {
    this.empleados = this.empleadosOrigen.filter(x => x.id != empleadoId);
    this.eliminarEmpleado.emit(empleadoId);
  }

  ngOnInit(): void {
    this.empleados = this.empleadosOrigen;
  }

}
