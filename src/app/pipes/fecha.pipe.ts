import { DatePipe, formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})


export class FechaPipe implements PipeTransform {

  transform(fecha: Date | undefined, ...args: string[]): string {
    if (!fecha) return "--";

    if (!args || args.length == 0) args = ['mediana'];

    let datePipe = new DatePipe("es-MX");
    let fechaTxt: string = "";
    switch (args[0]) {
      case 'c':
      case 'corta':
      case 'short':
        fechaTxt = formatDate(fecha, 'dd/MM/yy', 'es-MX');
        break;
      case 'l':
      case 'larga':
      case 'long':
        fechaTxt = formatDate(fecha, 'longDate', 'es-MX');
        break;
      case 'f':
      case 'full':
      case 'completa':
        fechaTxt = formatDate(fecha, 'fullDate', 'es-MX');
        break;
      case 'm':
      case 'mediana':
      default:
        fechaTxt = datePipe.transform(fecha, 'dd MMMM yyyy') || "--";
        break;
    }
    fechaTxt = titleCaseSinPuntos(fechaTxt);

    if (args.length > 1) {
      switch (args[1]) {
        case 'c':
        case 'corta':
        case 'short':
          fechaTxt += " " + formatDate(fecha, 'HH:mm', 'es-MX');
          break;
        case 'l':
        case 'larga':
        case 'long':
          fechaTxt += " " + formatDate(fecha, 'HH:mm:ss', 'es-MX');
          break;
        case 'f':
        case 'full':
        case 'completa':
          fechaTxt += " " + formatDate(fecha, 'H:mm:ss a', 'es-MX');
          break;
        case 'm':
        case 'mediana':
        default:
          fechaTxt += " " + formatDate(fecha, 'HH:mm:ss', 'es-MX');
          break;
      }
    }

    return fechaTxt;
  }
}

function titleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

function titleCaseSinPuntos(str: string) {
  let strTxt: string = str.replace(/./g, "");
  return strTxt.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}