import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpressService {

  constructor(private http: HttpClient) { }
  cargar_ipress_microred(id_microred: any) {
    return this.http.get<any>(environment.url_api + 'maestros/ipress/?search=' + id_microred)

  }
}
