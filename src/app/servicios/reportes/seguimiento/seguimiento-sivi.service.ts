import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SeguimientoSiviInterfaaceOb } from './seguimiento-sivi.interface copy';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoSiviService {

  constructor(private http:HttpClient) { }

  cargar_seguimiento(){
   return  this.http.get<SeguimientoSiviInterfaaceOb[]>(environment.url_api_node+'reporte-seguimiento/generar_siv')
  }

  cargar_seguimiento_2(filtro:any){
    return  this.http.post<SeguimientoSiviInterfaaceOb[]>(environment.url_api_node+'reporte-seguimiento/generar_siv_2',filtro)
   }
}
