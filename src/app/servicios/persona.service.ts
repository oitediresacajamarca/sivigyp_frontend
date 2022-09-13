import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  buscar_persona(dni: any) {
    return this.http.get<any>(environment.url_api_django + 'persona/person/' + dni + '/?format=json')

  }

  buscar_lista_persona_en_ipress_pagina(ipress: string,pagina:string) {
    return this.http.get<any>(environment.url_api_node + 'gestante/persona_hc_por_ipress/' + ipress+'?skip='+pagina)
  }

  buscar_lista_persona_en_ipress(ipress: string) {
    return this.http.get<any>(environment.url_api_node + 'gestante/persona_hc_por_ipress/' + ipress)
  }
  buscar_persona_en_ipress(dni: any, ipress: string) {
    return this.http.get<any>(environment.url_api_node + 'gestante/persona_hc_por_ipress/' + dni + '/' + ipress)

  }
  buscar_persona_hc_en_region(dni: any,) {
    return this.http.get<any>(environment.url_api_node + 'gestante/persona_hc/' + dni)
  }

}
