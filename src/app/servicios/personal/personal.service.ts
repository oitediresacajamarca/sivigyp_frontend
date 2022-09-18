import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaPersonalInterface } from 'src/app/componentes/personal/lista-personal-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }
  cargar_personal_ipress(renipress:string) {
    return this.http.get<ListaPersonalInterface[]>(environment.url_api_node+'personal/ipress/'+renipress)
  }

}
