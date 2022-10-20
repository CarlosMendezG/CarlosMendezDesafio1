import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-empleados',
  templateUrl: './menu-empleados.component.html',
  styleUrls: ['./menu-empleados.component.css']
})
export class MenuEmpleadosComponent implements OnInit {

  constructor() { }

  @Input()
  public menuSeleccionado: string = "ListadoMatEmpleados";
  @Output()
  public menuEmpleadosSeleccionado = new EventEmitter<string>();
  seleccionarMenu(nuevaSelección: string) {
    if (this.menuSeleccionado == nuevaSelección) return;
    switch (nuevaSelección) {
      case 'Empleados':
      case 'EmpleadosInputOutput':
      case 'EmpleadosCards':
      case 'ListadoMatEmpleados':
      case 'ListadoEmpleados':
      case 'SeleccionarEmpleados':
        this.menuSeleccionado = nuevaSelección;
        break;
      default:
        return;
    }
    this.menuEmpleadosSeleccionado.emit(nuevaSelección);
  }

  @Input()
  public mostrarDatos: boolean = false;
  @Output()
  public mostrarDatosEmpleados = new EventEmitter<boolean>();
  mostrarDatosDeEmpleados() {
    this.mostrarDatosEmpleados.emit(this.mostrarDatos);
  }

  ngOnInit(): void {

  }

}
