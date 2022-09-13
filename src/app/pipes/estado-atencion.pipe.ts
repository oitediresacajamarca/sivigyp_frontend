import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoAtencion'
})
export class EstadoAtencionPipe implements PipeTransform {

  estados=['','PENDIENTE','ATENDIDO']
  transform(value: number, ...args: unknown[]): unknown {
    console.log(value)
    console.log(this.estados[value])


    return this.estados[value];
  }

}
