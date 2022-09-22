import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  public empleados: Empleados[] = [];

  public todosEmpleados: boolean = false;
  public seleccionarTodo() {

  }

  // public deFechaATexto(fechaTexto: string) {
  //   if (!fechaTexto) return '-';
  //   let fecha: Date = fechaTexto(fechaTexto, false);
  //   return formatDate(fecha, 'dd MMM yyyy HH:mm:ss', 'es-MX').replace('.', '');
  // }

  ngOnInit(): void {
    this.todosEmpleados = false;
    let empleado: Empleados = new Empleados(1, "Juan", "XEXX00530", new Date(2020, 1, 2), true);
    this.empleados.push(empleado);
    empleado = new Empleados(2, "Pedro", "12314", new Date(2020, 3, 2), true);
    this.empleados.push(empleado);
    empleado = new Empleados(3, "Luis", "WEE1544", new Date(2021, 3, 2), false);
    this.empleados.push(empleado);
  }


}
