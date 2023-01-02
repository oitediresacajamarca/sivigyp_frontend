import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AtencionPuerperioInterface } from './interface/atencion-puerperio-interface';

@Injectable({
  providedIn: 'root'
})
export class AtencionPuerperioService {

  constructor(private http: HttpClient) { }
  cargar_aatenciones_puerperio(ID_ATENCION: string) {
    return this.http.get<AtencionPuerperioInterface>(environment.url_api_node + 'atencion-gestante/atencion_puerperio_parto/' + ID_ATENCION)
  }

  generar_citas(ID_ATENCION_PARTO:number){
    return this.http.post(environment.url_api_node+'atencion-puerperio/crear_citas',{ID_ATENCION_PARTO})
  }
  ATENDER(id_atencion:number,metodos:any){

    return this.http.post(environment.url_api_node+'atencion-puerperio/atender/'+id_atencion,metodos)
  }
  reprogramar_cita(data:any){
    return this.http.post(environment.url_api_node+'atencion-puerperio/reprogramar/'+data.id_atencion,data)
  }
  no_atender(data:any){
    return this.http.post(environment.url_api_node+'atencion-puerperio/no_atender/'+data.id_atencion,data)

  }
  eliminar(ID_ATENCION_PUERPERIO:number){
    return this.http.delete(environment.url_api_node+'atencion-puerperio/'+ID_ATENCION_PUERPERIO)

  }
  nueva_cita(data:any){
    return this.http.post(environment.url_api_node+'atencion-puerperio',data)
  }

}
