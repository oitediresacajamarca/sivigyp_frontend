import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradoInstruccionService {

  constructor(private http: HttpClient) {

  }
  cargar_grados_instruccion(){
    return this.http.get<any[]>(environment.url_api_node + 'grado-instruccion');
  }
}
