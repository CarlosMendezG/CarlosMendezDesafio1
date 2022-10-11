import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanATexto'
})
export class BooleanATextoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
