import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { PadronGestanteSivi } from './padron-gestante-servi/interface/padron-gestante-sivi';

@Injectable({
  providedIn: 'root'
})
export class PadronGestanteServiService {

  constructor(private http: HttpClient) { }

  cargar_padron(ambito: any) {
    return this.http.post<PadronGestanteSivi[]>(environment.url_api_node + 'padron-gestante/SIV',ambito)

  }
}
