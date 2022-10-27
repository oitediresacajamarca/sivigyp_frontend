import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { hecho_multisectorial } from './multisectorial/interface';

@Injectable({
  providedIn: 'root'
})
export class MultisectorialService {

  constructor(private http: HttpClient) { }

  cargar_detalle_fil(filtro: any) {
    return this.http.post<hecho_multisectorial[]>(environment.url_api_node + 'multisectorial-hecho/detalle', filtro)

  }
  cargar_detalle_dni(NRO_DOCUMENTO: any) {
    return this.http.get<any[]>(environment.url_api_node + 'multisectorial-hecho/detalle/'+NRO_DOCUMENTO)

  }
}
