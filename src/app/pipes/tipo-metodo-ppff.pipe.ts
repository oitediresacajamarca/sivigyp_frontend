import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoMetodoPpff'
})
export class TipoMetodoPpffPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {


    if (value== 1) {
      value = 'CONDON MASCULINO'
    }
    if (value== 2) {
      value = 'CONDÓN FEMENINO'
    }

    if (value== 3) {
      value = 'INYECCION TRIMESTRAL'
    }
    if (value== 4) {
      value = 'INYECCIÓN MENSUAL'
    }
    if (value== 5) {
      value = 'ORAL C'
    }
    if (value== 6) {
      value = 'DIU'
    }
    if (value== 7) {
      value = 'IMPLANTE'
    }
    if (value== 8) {
      value = 'AQVF'
    }
    if (value== 9) {
      value = 'NINGUNO'
    }



    return value;
  }

}
