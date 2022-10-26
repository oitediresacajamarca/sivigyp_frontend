import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    // return this.http.post(environment.url_api_node + 'autentificacion/login', { user, password });
    return this.http.post<any>("https://sir.diresacajamarca.gob.pe:8050/api/sivigyp", { email: user, password: password })
  }
  get_profile(toke: string) {
    // return this.http.post(environment.url_api_node + 'autentificacion/login', { user, password });

    const headers = new HttpHeaders();

    headers.append('Authorization', 'Bearer ' + toke)


    return this.http.get<any>("http://sir.diresacajamarca.gob.pe:8050/api/user", { headers })
  }

}
