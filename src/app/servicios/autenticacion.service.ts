import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    return this.http.post(environment.url_api_node + 'autentificacion/login', { user, password });
  }
}
