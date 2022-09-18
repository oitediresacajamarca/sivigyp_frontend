import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RiesgosService {

  constructor(private http: HttpClient) { }
  devolver_riesgos() {
    return this.http.get<any[]>(environment.url_api_node + 'riesgos')
  }
}
