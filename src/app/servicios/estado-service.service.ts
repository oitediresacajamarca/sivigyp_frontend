import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataGestanteInterface } from '../interface/data-gestante-interface';

@Injectable({
  providedIn: 'root'
})
export class EstadoServiceService {

  paciente:DataGestanteInterface={"ID_PERSONA":1,"NOMBRES":"ADELINA ","APELLIDO_PAT":"LUCANO ","APELLIDO_MAT":"EUGENIO","ID_TIPOD":1,"NRO_DOCUMENTO":"47198873","FECHA_NAC":"1991-09-03T00:00:00","ID_DISTRITO":"060701","ID_PROVINCIA":"0607","ID_DEPARTAMENTO":"06","DIRECCION":"LLAUCAN","TELEFONO":"PENDIENTE","CORREO":"PENDIENTE","ID_GENERO":2,"NOMBRES_COMP":"ADELINA  LUCANO  EUGENIO"}

  constructor(private http:HttpClient) { 

  }
  devolver_datos_por_dni(dni:any){
    return this.http.get(environment.url_api+'persona/person/'+dni+'/?format=json')
  }
}
