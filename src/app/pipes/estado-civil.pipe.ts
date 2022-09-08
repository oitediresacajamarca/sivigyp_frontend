import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {

  constructor() {

  }
  ESTADOS_CIV = [{ "ID_ESTADO_CIVIL": 1, "NOMBRE": "SOLTERA", "ESTADO": 1 }, { "ID_ESTADO_CIVIL": 2, "NOMBRE": "CASADA", "ESTADO": 1 }, { "ID_ESTADO_CIVIL": 3, "NOMBRE": "DIVORCIADA", "ESTADO": 1 }, { "ID_ESTADO_CIVIL": 4, "NOMBRE": "VIUDA", "ESTADO": 1 }, { "ID_ESTADO_CIVIL": 5, "NOMBRE": "CONVIVIENTE", "ESTADO": 1 }]

  transform(value: unknown, ...args: unknown[]): unknown {

    return this.ESTADOS_CIV.find(est => {
      return est.ID_ESTADO_CIVIL == value
    })?.NOMBRE
    return null;

  }

}
