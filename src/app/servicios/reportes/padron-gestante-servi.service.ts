import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PadronGestanteHis } from './padron-gestante-servi/interface/padron-gestante-his';

@Injectable({
  providedIn: 'root'
})
export class PadronGestanteServiService {

  constructor(private http: HttpClient) { }

  cargar_padron(ipress: string) {
    return this.http.get<PadronGestanteHis[]>(environment.url_api_node + 'padron-gestante/' + ipress)

  }
}
