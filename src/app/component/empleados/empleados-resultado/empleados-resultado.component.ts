import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-resultado',
  templateUrl: './empleados-resultado.component.html',
  styleUrls: ['./empleados-resultado.component.css']
})
export class EmpleadosResultadoComponent implements OnInit {

  constructor(
    private empleadosService: EmpleadosService
  ) { }

  public _empleados: Empleados[] = [];

  @Input()
  public set empleados(e: Empleados[]) {
    this._empleados = e;
  }
  public get empleados(): Empleados[] {
    return this._empleados;
  }

  public empleados$!: Observable<Empleados[]>;

  ngOnInit(): void {

    this.empleados$ = this.empleadosService.obtenerEmpleadosObservable();
  }
}
