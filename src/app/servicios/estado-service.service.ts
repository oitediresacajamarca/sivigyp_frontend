import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


import { DataGestanteInterface } from '../interface/data-gestante-interface';

@Injectable({
  providedIn: 'root'
})
export class EstadoServiceService {

  paciente: DataGestanteInterface = // 20220831142648
  // http://localhost:3000/api/gestante/persona_hc/42359805


    {
      "ID_PERSONA": 2,
      "ID_TIPOD": 1,
      "NRO_DOCUMENTO": "42359805",
      "ID_GENERO": 2,
      "NOMBRES": "CONSUELO ",
      "APELLIDO_PAT": "OLIVARES",
      "APELLIDO_MAT": "CAMPOS",
      "ID_DISTRITO": "060701",
      "DIRECCION": "MARAYPAMPA",
      "FECHA_NAC": "1984-02-03T05:00:00.000Z",
      "TELEFONO": '',
      "CORREO": "PENDIENTE",
      "ID_HC": 1415,
      "NRO_HCL": "42359805",
      "COD_IPRESS": "000004791",
      "ID_CENTRO_POBLADO": "0601010001",
      "TIPO_SEGURO": 1,
      "ID_GRADO_INSTRUCCION": 5,
      "BENEFICIARIA_JUNTOS": 0,
      "ESTADO_CIVIL": 5,
      "IDIOMA": "CASTELLANO",
      "RELIGION": '',
      "GRUPO_SANGUINEO": "O",
      "FACTOR_SANGUINEO": "POSITIVO",
      "FEC_REGISTRO": '',
      "ESTADO_HC": '',
      "establecimientos_cantidad": 1,
      "ipress": {
        "COD_IPRESS": "000004791",
        "ID_UE": 1662,
        "ID_DISTRITO": "060701",
        "NOMBRE": "LLAUCAN",
        "DIRECCION": "OTROS CENTRO POBLADO LLAUCAN CENTRO POBLADO LLAUCAN BAMBAMAR",
        "ID_MICRORED": 58,
        "CATEGORIA": "I-3",
        "TELEFONO": "997747817",
        "CORREO": "essrllaucan@hotmail.com"
      },
      "distrito": {
        "ID_DISTRITO": "060701",
        "ID_PROVINCIA": "0607",
        "NOMBRE": "BAMBAMARCA"
      },
      "provincia": {
        "ID_PROVINCIA": "0601",
        "NOMBRE": "CAJAMARCA"
      }
    }

    alerta:boolean=false;

    ambito:{cod_ambito:string,nombre_ambito:string,nivel_ambito:string,ambito_origen:string,nivel_ambito_origen:''}=
    {cod_ambito:'',nombre_ambito:'',nivel_ambito:'',ambito_origen:'',nivel_ambito_origen:''}

    cambio_ambito:EventEmitter<any>= new EventEmitter()




  constructor(private http: HttpClient) {

  }
  devolver_datos_por_dni(dni: any) {
    return this.http.get(environment.url_api_django + 'persona/person/' + dni + '/?format=json')
  }
  devolver_ambito_actual() {
    return this.ambito
  }
}
