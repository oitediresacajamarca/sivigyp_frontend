import { Component, OnInit } from '@angular/core';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';
import { AtencionesPendientes } from 'src/app/servicios/atencion-reg/interface/atenciones-pendientes';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

@Component({
  selector: 'app-principal-notificaciones',
  templateUrl: './principal-notificaciones.component.html',
  styleUrls: ['./principal-notificaciones.component.scss']
})
export class PrincipalNotificacionesComponent implements OnInit {

  constructor(private atencion_reg_ser: AtencionRegService,private estados_:EstadoServiceService) { }
  IPRESS: string = ''
  HOY: Date = new Date()
  atenciones_pendientes: AtencionesPendientes[] = []
  nro_atenciones_pendientes=0
  paginas:number[]=[]


  ngOnInit(): void {
    this.CARGAR_CITAS_PENDIENTES()
    this.paginas= new Array(6)
    this.paginas=[1,2,3,4,5,6]
  }
  CARGAR_CITAS_PENDIENTES(pagina=1,len=10) {


    this.atencion_reg_ser.pendientes_actuales(this.estados_.devolver_ambito_actual().cod_ambito, { fecha: new Date(),pagina:pagina,len:len }).subscribe(respuesta => {
      console.log(respuesta)
      this.nro_atenciones_pendientes=respuesta.length
      this.atenciones_pendientes = respuesta
    }

    )
  }

  selecciono_pagina(i:number){
    console.log(i)
    this.CARGAR_CITAS_PENDIENTES(i,15)

  }

}
