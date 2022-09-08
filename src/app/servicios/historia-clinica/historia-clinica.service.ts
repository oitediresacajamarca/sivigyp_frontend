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
}
