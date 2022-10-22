import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosOneService {
  ambito = ''

  constructor(private http: HttpClient) { }
  cargar_redes_fil(origen: string) {
    return this.http.get<any>(environment.url_api_node + 'establecimientos-one/RED/' + origen)
  }
  cargar_microred_fil(origen: string,id_red:number) {
    return this.http.get<any>(environment.url_api_node + 'establecimientos-one/MICRORED/' + origen+'/'+id_red)
  }
  cargar_estable_fil(origen: string,id_red:number) {
    return this.http.get<any>(environment.url_api_node + 'establecimientos-one/ESTABLECIMIENTO/' + origen+'/'+id_red)
  }
  cargar_estable(id_establec:number) {
    return this.http.get<any>(environment.url_api_node + 'establecimientos-one/ESTABLECIMIENTO_ONE/'+id_establec )
  }
}
