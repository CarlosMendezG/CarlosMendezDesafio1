import { Component, Input, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados-resultado',
  templateUrl: './empleados-resultado.component.html',
  styleUrls: ['./empleados-resultado.component.css']
})
export class EmpleadosResultadoComponent implements OnInit {

  constructor() { }

  public _empleados: Empleados[] = [];

  @Input()
  public set empleados(e: Empleados[]) {
    this._empleados = e;
  }
  public get empleados(): Empleados[] {
    return this._empleados;
  }


  ngOnInit(): void {
  }

}
