import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RiesgosService {

  constructor(private http: HttpClient) { }
  asignar_riesgos(ID_ATENCION: number, body: any) {
    return this.http.post(environment.url_api_node + 'riesgos/asignar/' + ID_ATENCION, { RIESGOS: body })

  }
  cargar_riesgos(ID_ATENCION: number){
    return this.http.get(environment.url_api_node + 'riesgos/atencion/' + ID_ATENCION)
  }
}
