import { Injectable } from '@angular/core';
import { TipoSeguro } from 'src/app/interface/tipo-seguro';

@Injectable({
  providedIn: 'root'
})
export class TipoSeguroService {

  tipos_seguros:TipoSeguro[] = [{ "ID_TIPO_SEGURO": 1, "NOMBRE": "SISTEMA INTEGRADO DE SALUD", "ABRV": "SIS", "ESTADO": 1 }, { "ID_TIPO_SEGURO": 2, "NOMBRE": "ESSALUD", "ABRV": "ESSALUD", "ESTADO": 1 }, { "ID_TIPO_SEGURO": 3, "NOMBRE": "SANIDAD", "ABRV": "SANIDAD", "ESTADO": 1 }, { "ID_TIPO_SEGURO": 4, "NOMBRE": "NINGUNO", "ABRV": "NINGUNO", "ESTADO": 1 }, { "ID_TIPO_SEGURO": 5, "NOMBRE": "OTRO", "ABRV": "OTRO", "ESTADO": 1 }]

  constructor() { }
  devolver_seguro(id: number):TipoSeguro|undefined {

   return this.tipos_seguros.find(tip=>{return tip.ID_TIPO_SEGURO==id});

  }

}


