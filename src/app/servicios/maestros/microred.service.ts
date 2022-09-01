import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicroredService {

  constructor(private http: HttpClient) { }
  cargar_microred_segun_microred(id_red: any) {
    return this.http.get<any[]>(environment.url_api_django + 'maestros/microred/?search=' + id_red)
  }
}
