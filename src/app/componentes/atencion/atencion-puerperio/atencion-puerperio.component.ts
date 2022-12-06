
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtencionPuerperioService } from 'src/app/servicios/atencion-puerperio/atencion-puerperio.service';
import { AtencionesPuerperio, AtencionPuerperioInterface, Parto } from 'src/app/servicios/atencion-puerperio/interface/atencion-puerperio-interface';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { AgregarCitaPuerperioComponent } from './agregar-cita-puerperio/agregar-cita-puerperio.component';
import { AtencionPfComponent } from './atencion-pf/atencion-pf.component';
import { NoAtencionPuerperioComponent } from './no-atencion-puerperio/no-atencion-puerperio.component';
import { ReprogramarAtencionPuerperioComponent } from './reprogramar-atencion-puerperio/reprogramar-atencion-puerperio.component';

@Component({
  selector: 'app-atencion-puerperio',
  templateUrl: './atencion-puerperio.component.html',
  styleUrls: ['./atencion-puerperio.component.scss']
})
export class AtencionPuerperioComponent implements OnInit {

  constructor(private persona_serv: PersonaService, private estados: EstadoServiceService, private activa_route: ActivatedRoute,
    private atencion_serv: AtencionPuerperioService) { }
  dni: string = ''
  ID_ATENCION: string = ''
  ATENCIONES_PUERPERIO: AtencionesPuerperio[] = []



  detalle_persona: any = {}

  PARTO!: Parto

  @ViewChild('atencion_ppf')
  atencion_pff!: AtencionPfComponent

  @ViewChild('reprogramar')
  reprogramar!: ReprogramarAtencionPuerperioComponent


  @ViewChild('no_atender')
  no_atender!: NoAtencionPuerperioComponent

  @ViewChild('agregar_cita')
  agregar_cita!: AgregarCitaPuerperioComponent





  ngOnInit(): void {
    this.dni = this.estados.paciente.NRO_DOCUMENTO
    this.activa_route.params.subscribe(params => {
      this.ID_ATENCION = params['ID_ATENCION'];

    })

    this.cargarPersonaDetalle()
    this.cargarAtencionPuerperio()
  }

  cargarPersonaDetalle() {
    this.persona_serv.buscar_persona_hc_en_region(this.dni).subscribe(respuesta => {

      this.detalle_persona = respuesta[0]

    })

  }
  cargarAtencionPuerperio() {
    this.atencion_serv.cargar_aatenciones_puerperio(this.ID_ATENCION).subscribe(respuesta => {

      this.PARTO = respuesta.PARTOS[0]
      this.ATENCIONES_PUERPERIO = respuesta.AtencionesPuerperios
    })
  }

  generar_citas() {
    this.atencion_serv.generar_citas(this.PARTO.ID_ATENCION_PARTO).subscribe(respuesta => {

      this.cargarAtencionPuerperio()
    })
  }
  MOSTRAR_DIALOG(ID_ATENCION_PUERPERIO: number) {
    this.atencion_pff.ID_ATENCION_PUERPERIO = ID_ATENCION_PUERPERIO

    this.atencion_pff.mostrar = true

  }

  ATENDER(id_atencion: number) {


    this.atencion_serv.ATENDER(id_atencion).subscribe(respuesta => {
      this.cargarAtencionPuerperio()
    })

  }


  acepto_dialogo(e: any) {



    this.ATENDER(e.ID_ATENCION)

  }

  mostra_dialog_reprogramar( id_atencion:number) {

this.reprogramar.id_atencion_cita=id_atencion
    this.reprogramar.mostrar = true
  }

  reprogramar_cita(e: any) {

    this.atencion_serv.reprogramar_cita(e).subscribe(respuesta=>{console.log(respuesta)
  this.cargarAtencionPuerperio()

    },error=>{alert('error en el servidor'+JSON.stringify(error))})


  }

  mostra_dialog_no_atender(id_atencion:number){
    this.no_atender.id_atencion_cita=id_atencion
    this.no_atender.mostrar=true

  }
  acepto_no_atender(e:any){

    this.atencion_serv.no_atender(e).subscribe(respuesta=>{
   ;this.cargarAtencionPuerperio()
    },error=>{alert(JSON.stringify(error))})

  }

  eliminar(ID_ATENCION_PUERPERIO:number){
    this.atencion_serv.eliminar(ID_ATENCION_PUERPERIO).subscribe(respuesta=>{
      console.log(respuesta)
      this.cargarAtencionPuerperio()
    })
  }

  acepto_nueva_cita(e:any){

console.log(e)
    this.atencion_serv.nueva_cita(e).subscribe(respuesta=>{
      this.cargarAtencionPuerperio()

    })


  }
  Agregar_Cita(){this.agregar_cita
    this.agregar_cita.ID_ATENCION=this.ID_ATENCION
    this.agregar_cita.mostrar=true
  }


}
