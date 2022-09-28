import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtencionPartoService {

  constructor(private http: HttpClient) {

  }
  Registrar_Parto(id_atencion: number, datos_atencion: any) {
    return this.http.post(environment.url_api_node+'atencion-parto', {...datos_atencion,ID_ATENCION:id_atencion})
  }
  Cargar_Partos(id_atencion: number){

return this.http.get<any[]>(environment.url_api_node+'atencion-parto/atencion/'+id_atencion)
  }
}
