import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincias } from 'src/app/interface/provincia-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  devolver_provincias() {
    return this.http.get<Provincias[]>(environment.url_api_node+'distribucion-geografica/provincias')
  }
}
