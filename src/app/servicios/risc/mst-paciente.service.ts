import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MstPacienteService {

  constructor(private http: HttpClient) { }
  devolver_mst_paciente(numero_documento: string) {
    return this.http.get(environment.url_api_node + 'persona-risc/' + numero_documento)
  }
}
