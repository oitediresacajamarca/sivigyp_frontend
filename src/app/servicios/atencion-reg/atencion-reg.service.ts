import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtencionReg } from 'src/app/interface/atencion-reg';
import { environment } from 'src/environments/environment';

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
  eliminar(ID_ATENCION_REG:number){
    return this.http.delete<AtencionReg>(environment.url_api_node + 'atencion-reg/'+ID_ATENCION_REG)

  }
}
