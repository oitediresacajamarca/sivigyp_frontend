import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentroPobladoService {

  constructor(private http: HttpClient) { }
  devolver_centro_poblado_por_distrito(cod_distrito: string) {
    return this.http.get<any[]>(environment.url_api_node + 'distribucion-geografica/centros_poblados/distrito/' + cod_distrito)
  }
}
