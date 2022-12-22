import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoSeguro'
})
export class TipoSeguroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let ret=''
    console.log(value)
    if(value==1)
    {
      ret='SISTEMA INTEGRADO DE SALUD'
    }

    if(value==2)
    {
      ret='ESSALUD'
    }
    if(value==3)
    {
      ret='SANIDAD'
    }
    if(value==4)
    {
      ret='NINGUNO'
    }
    if(value==5)
    {
      ret='OTRO'
    }

    return ret;
  }

}
