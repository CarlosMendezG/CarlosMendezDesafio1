import { Pipe, PipeTransform } from '@angular/core';
import { Empleados } from '../models/empleados';

@Pipe({
  name: 'filtroEmpleados'
})
export class FiltroEmpleadosPipe implements PipeTransform {

  transform(empleados: Empleados[], filtro: string): Empleados[] {
    return empleados.filter(empleado =>
      empleado.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
      || empleado.rfc.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()));
  }

}
