import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cumple'
})
export class CumplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value==1){
      return 'SI'

    }
    if(value==0){
      return 'NO'

    }
    return null;
  }

}
