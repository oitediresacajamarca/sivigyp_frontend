import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosNacService {

  constructor(private http: HttpClient) { }

  devolver_departamentos() {
    return this.http.get<any[]>(environment.url_api_node + 'establecimientos_nac/departamentos')
  }
  devolver_provincias(cod_dep:string) {
    return this.http.get<any[]>(environment.url_api_node + 'establecimientos_nac/provincias/'+cod_dep)
  }
  devolver_distritos_por_provincia(cod_prov:string){
    return this.http.get<any[]>(environment.url_api_node + 'establecimientos_nac/distritos/'+cod_prov)
  }
  cargar_por_ubigeo(cod_ubigeo:string){
    return this.http.get<any[]>(environment.url_api_node + 'establecimientos_nac/establecimiento/'+cod_ubigeo)
  }
}
