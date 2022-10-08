import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoSiviService {

  constructor(private http:HttpClient) { }

  cargar_seguimiento(){
   return  this.http.get(environment.url_api_node+'reporte-seguimiento/generar_siv')
  }
}
