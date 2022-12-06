import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  constructor(private http: HttpClient) { }

  nueva_historia_clinica(numero_documento: string, body: any) {
    return this.http.post(environment.url_api_node + 'gestante/persona_hc/' + numero_documento, body);
  }
  devolver_historia_clinica(numero_documento:string){
    return this.http.get(environment.url_api_node + 'gestante/persona_hc/' + numero_documento);
  }
  devolver_historia_clinica_id_historia(id_historia:string){
    return this.http.get(environment.url_api_node + 'gestante/persona_hc_id_historia/' + id_historia);
  }

  actualizar_historia_clinica(id_historia:string,data:any){
    return this.http.post(environment.url_api_node + 'gestante/historia/' + id_historia, data);
  }
}
