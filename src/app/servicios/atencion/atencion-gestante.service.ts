import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AtencionGestanteGto } from './dto/atencion-gestante-gto';

@Injectable({
  providedIn: 'root'
})
export class AtencionGestanteService {

  constructor(private http:HttpClient) { }

  nueva_atencion(num_hcl:string,data:any){

   return  this.http.post(environment.url_api_node+'atencion-gestante/'+num_hcl,data);

  }
  actualizar_atencion(num_hcl:string,data:any){
    return  this.http.patch<AtencionGestanteGto>(environment.url_api_node+'atencion-gestante/'+num_hcl,data);

  }


  devolver_atencion(num_hcl:string){
    return  this.http.get<AtencionGestanteGto>(environment.url_api_node+'atencion-gestante/'+num_hcl);

  }
}
