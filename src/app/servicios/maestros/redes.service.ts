import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  redes = [{ "ID_RED": 1, "ID_SUBREGION": 1, "NOMBRE": "CONTUMAZA" }, { "ID_RED": 2, "ID_SUBREGION": 1, "NOMBRE": "CAJAMARCA" }, { "ID_RED": 3, "ID_SUBREGION": 1, "NOMBRE": "CELENDIN" }, { "ID_RED": 4, "ID_SUBREGION": 1, "NOMBRE": "SAN MARCOS" }, { "ID_RED": 5, "ID_SUBREGION": 1, "NOMBRE": "CAJABAMBA" }, { "ID_RED": 6, "ID_SUBREGION": 1, "NOMBRE": "SAN MIGUEL" }, { "ID_RED": 7, "ID_SUBREGION": 1, "NOMBRE": "SAN PABLO" }, { "ID_RED": 8, "ID_SUBREGION": 2, "NOMBRE": "CHOTA" }, { "ID_RED": 9, "ID_SUBREGION": 2, "NOMBRE": "BAMBAMARCA" }, { "ID_RED": 10, "ID_SUBREGION": 2, "NOMBRE": "SANTA CRUZ" }, { "ID_RED": 11, "ID_SUBREGION": 3, "NOMBRE": "CUTERVO" }, { "ID_RED": 12, "ID_SUBREGION": 3, "NOMBRE": "SOCOTA" }, { "ID_RED": 13, "ID_SUBREGION": 4, "NOMBRE": "JAEN" }, { "ID_RED": 14, "ID_SUBREGION": 4, "NOMBRE": "SAN IGNACIO" }]
  constructor() { }

  cargar_redes(){
    return this.redes
  }
}
