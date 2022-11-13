
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EstablecimientosOneService } from 'src/app/servicios/establecimientos-on/establecimientos-one.service';
import { Location } from '@angular/common';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

@Component({
  selector: 'app-ambito-profile-select',
  templateUrl: './ambito-profile-select.component.html',
  styleUrls: ['./ambito-profile-select.component.scss']
})
export class AmbitoProfileSelectComponent implements OnInit {

  constructor(private est: EstablecimientosOneService, private router: Router, private location: Location,private estados:EstadoServiceService) { }
  mostrar = true
  ambito_origen = '6070000'

  ID_RED = 0
  ID_MICRORED = 0
  ID_IPRESS = 0

  REDES_FIL: any[] = []

  MICRORED_FIL: any[] = []

  ESTABLECIMIENTOS_FIL: any[] = []

  ngOnInit(): void {
    this.cargar_redes()
  }

  cerrar() {
    this.mostrar = false
    this.location.back()

  }

  selecciono_unidad_ejecutora(event: any) {

  }
  selecciono_red(e: any) {
    this.MICRORED_FIL = []
    this.ESTABLECIMIENTOS_FIL = []

    this.ID_RED = e.target.value
    this.cargar_microred_por_red()
  }

  selecciono_microred(e: any) {
    this.ID_MICRORED = e.target.value
    this.cargar_estbalec_por_microred()


  }
  cargar_redes() {
    this.MICRORED_FIL = []
    this.ESTABLECIMIENTOS_FIL = []

    this.est.cargar_redes_fil(this.ambito_origen).subscribe(respuesta => {

      this.REDES_FIL = respuesta
    })

  }
  cargar_microred_por_red() {
    this.MICRORED_FIL = []
    this.ESTABLECIMIENTOS_FIL = []

    this.est.cargar_microred_fil(this.ambito_origen, this.ID_RED).subscribe(respuesta => {


      this.MICRORED_FIL = respuesta
    })

  }

  cargar_estbalec_por_microred() {
    this.ESTABLECIMIENTOS_FIL = []

    this.est.cargar_estable_fil(this.ambito_origen, this.ID_MICRORED).subscribe(respuesta => {


      this.ESTABLECIMIENTOS_FIL = respuesta
    })

  }
  EstablecerAmbito() {


    this.est.cargar_estable(this.ID_IPRESS).subscribe(data=>{

     this.estados.ambito.cod_ambito=(data.Id+1000000000).toString().substring(1,10)

     this.estados.ambito.nombre_ambito=data.Nombre
     this.estados.cambio_ambito.emit()

     this.cerrar()


    })








  }


}
