import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoParto'
})
export class TipoPartoPipe implements PipeTransform {

 TIPOS_PARTO= [{ "ID": 1, "NOMBRE": "VAGINAL", "ESTADO": 1 }, { "ID": 2, "NOMBRE": "CESAREA", "ESTADO": 1 }, { "ID": 3, "NOMBRE": "ABORTO", "ESTADO": 1 }]

  transform(value: unknown, ...args: unknown[]): unknown {

    return this.TIPOS_PARTO.find(est => {
      return est.ID == value
    })?.NOMBRE
    return null;

  }

}
