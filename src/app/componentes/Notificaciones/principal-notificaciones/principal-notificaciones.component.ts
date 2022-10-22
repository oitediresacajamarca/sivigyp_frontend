import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';
import { AtencionesPendientes } from 'src/app/servicios/atencion-reg/interface/atenciones-pendientes';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-principal-notificaciones',
  templateUrl: './principal-notificaciones.component.html',
  styleUrls: ['./principal-notificaciones.component.scss']
})
export class PrincipalNotificacionesComponent implements OnInit {

  constructor(private atencion_reg_ser: AtencionRegService, private estados_: EstadoServiceService,private persona_service:PersonaService,private router:Router) { }

  IPRESS: string = ''
  HOY: Date = new Date()
  atenciones_pendientes: AtencionesPendientes[] = []
  nro_atenciones_pendientes = 0
  paginas: number[] = []


  ngOnInit(): void {
    this.CARGAR_CITAS_PENDIENTES()
    this.paginas = new Array(6)
    this.paginas = [1, 2, 3, 4, 5, 6]
  }

  gen_paginas(){
let cantidad_paginas=this.nro_atenciones_pendientes/10
this.paginas=[]

for(let i=0; i<cantidad_paginas;i++){
  this.paginas.push(i+1)

}



  }

  CARGAR_CITAS_PENDIENTES(pagina = 1, len = 10) {


    this.atencion_reg_ser.pendientes_actuales(this.estados_.devolver_ambito_actual().cod_ambito, { fecha: new Date(), pagina: pagina, len: len }).subscribe(respuesta => {
      console.log(respuesta)
      this.nro_atenciones_pendientes = respuesta.total
      this.atenciones_pendientes = respuesta.data
      this.gen_paginas()
    }

    )
  }

  selecciono_pagina(i: number) {

    this.CARGAR_CITAS_PENDIENTES(i, 10)

  }
  siguiente() {
    this.paginas = this.paginas.map(dat => { return dat + 1 })
  }
  previo(){
    this.paginas = this.paginas.map(dat => { return dat -1 })
  }

  Ingresar(numero_documento:string){
    this.persona_service.buscar_persona_hc_en_region(numero_documento).subscribe(data=>{console.log(data)

      this.estados_.paciente=data[0]

      this.router.navigate(['/sivigyp/principal/','atencion-gestante'])
    })


  }
}
