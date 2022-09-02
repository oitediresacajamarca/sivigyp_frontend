import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Distrito } from 'src/app/interface/data-gestante-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(private http: HttpClient) { }
  devolver_distritos() {
    return this.http.get<Distrito[]>(environment.url_api_node+'distribucion-geografica/distritos')
  }
  devolver_distritos_por_provincia(cod_provincia:string) {
    return this.http.get<Distrito[]>(environment.url_api_node+'distribucion-geografica/distritos/provincia/'+cod_provincia)
  }
}
