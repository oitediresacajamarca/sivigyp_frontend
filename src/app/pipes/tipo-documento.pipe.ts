import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoDocumento'
})
export class TipoDocumentoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value== 1) {
      value = 'DNI'
    }
    if (value== 2) {
      value = 'PASAPORTE'
    }

    if (value== 3) {
      value = 'CÉDULA'
    }
    if (value== 4) {
      value = 'CARNET DE EXTRANJERÍA'
    }
    if (value== 5) {
      value = 'SIN DNI'
    }
    if (value== 6) {
      value = 'C.U.I.'
    }


    return value;
  }

}
