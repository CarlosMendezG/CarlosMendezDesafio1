import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-rxjs-cards',
  templateUrl: './empleados-rxjs-cards.component.html',
  styleUrls: ['./empleados-rxjs-cards.component.css']
})
export class EmpleadosRxjsCardsComponent implements OnInit {

  constructor(
    private empleadosService: EmpleadosService
  ) { }

  public empleados$: Observable<Empleados[]> = this.empleadosService.obtenerEmpleadosBehaviorSubject();
  public filtro: string = "";

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

  public eliminarEmpleadoClick(empleadoId: number) {
    this.empleadosService.eliminarEmpleado(empleadoId);
  }

  public aplicarFiltro(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    this.empleados$.pipe(
      map((empleados: Empleados[]) => empleados.filter((empleado: Empleados) => empleado.nombre.toLowerCase().includes(valorFiltro)))
    ).subscribe((empleados) => {
      console.log("filtro aplicado a rxjs cards");
    });
  }

  ngOnInit(): void {
  }

}
