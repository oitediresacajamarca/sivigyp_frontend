import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtencionReg } from 'src/app/interface/atencion-reg';
import { ReporteGestanteInterface } from 'src/app/reportes/reporte-gestante-generador/interface/reporte-gestante-interface';
import { environment } from 'src/environments/environment';
import { AtencionesPendientes, respuesta_pendiente } from './interface/atenciones-pendientes';

@Injectable({
  providedIn: 'root'
})
export class AtencionRegService {

  constructor(private http: HttpClient) {

  }
  cargar_atencion_reg(id_atencion: number) {
    return this.http.get<AtencionReg[]>(environment.url_api_node + 'atencion-reg/atencion/' + id_atencion)
  }

  generar_atencion_reg(id_atencion:number){
    return this.http.post<AtencionReg[]>(environment.url_api_node + 'atencion-reg/atencion/generar_atencion_reg/'+id_atencion,{id_atencion})

  }
  atender(ID_ATENCION_REG:number,payload:any){
    return this.http.post<AtencionReg>(environment.url_api_node + 'atencion-reg/atender/'+ID_ATENCION_REG,{...payload})

  }
  no_atender(ID_ATENCION_REG:number,payload:any){
    return this.http.post<AtencionReg>(environment.url_api_node + 'atencion-reg/noatender/'+ID_ATENCION_REG,{...payload})

  }
  eliminar(ID_ATENCION_REG:number){
    return this.http.delete<AtencionReg>(environment.url_api_node + 'atencion-reg/'+ID_ATENCION_REG)

  }
  reporte_gestante(ipress:string,data:any){
    return this.http.post<ReporteGestanteInterface[]>(environment.url_api_node + 'atencion-reg/reporte/gestante/'+ipress,data)
  }

  reprogramar(ID_ATENCION_REG:number,payload:any){
    return this.http.post<ReporteGestanteInterface[]>(environment.url_api_node + 'atencion-reg/reprogramar/'+ID_ATENCION_REG,payload)

  }

  pendientes_actuales(ipress:string,data:any){
    return this.http.post<respuesta_pendiente>(environment.url_api_node+'atencion-reg/pendientes/'+ipress,data)

  }
  nueva_cita(data:any){
    return this.http.post<any>(environment.url_api_node+'atencion-reg/nuevo/',data)

  }


}
