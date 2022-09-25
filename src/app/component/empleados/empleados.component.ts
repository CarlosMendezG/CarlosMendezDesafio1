import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  public empleadosOrigen: Empleados[] = [
    new Empleados(1, "Juan Gutierrez", "XEXX-000530-AW1", new Date(2020, 1, 2), undefined, true),
    new Empleados(2, "Pedro Perez", "PEPE-851225-QA8", new Date(2020, 3, 2), undefined, true),
    new Empleados(3, "Luis Lopez", "WEE1544", new Date(2021, 3, 2), new Date(2022, 1, 2), false),
    new Empleados(4, "Maria Kiwi", "KIWI0570", new Date(2021, 4, 3), undefined, true),
    new Empleados(5, "Cassandra Jimenez", "CASEWE2058", new Date(2021, 5, 6), new Date(2022, 2, 3), false)
  ];

  @Output()
  public empleadosSeleccionados = new EventEmitter<Empleados[]>();

  public empleados: Empleados[] = this.empleadosOrigen;
  public fechaVerificacion: Date = new Date();
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

  ngOnInit(): void {
    this.todosEmpleados = false;

    console.log(this.verificarObjeto(this.empleados));
    console.log(this.verificarObjeto(this.empleados[0]));
  }
}

// function decorador1() {  // como @Input
//   console.log("Decorador 1 definido");
//   return function (target: any, propertyKey: string, descriptor: PropertyDecorator) {
//     console.log("Decorador 1 está siendo llamado", target, propertyKey, descriptor);
//   }
// }

// class ejemplo {
//   decorador1()
//   metodo(){}
// }
