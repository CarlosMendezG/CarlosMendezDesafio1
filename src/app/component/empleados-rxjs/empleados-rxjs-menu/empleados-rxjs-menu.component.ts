import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleados-rxjs-menu',
  templateUrl: './empleados-rxjs-menu.component.html',
  styleUrls: ['./empleados-rxjs-menu.component.css']
})
export class EmpleadosRxjsMenuComponent implements OnInit {

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
  public mostrarDatos: boolean = true;
  @Output()
  public mostrarDatosEmpleados = new EventEmitter<boolean>();
  mostrarDatosDeEmpleados() {
    this.mostrarDatosEmpleados.emit(this.mostrarDatos);
  }

  ngOnInit(): void {

  }

}
