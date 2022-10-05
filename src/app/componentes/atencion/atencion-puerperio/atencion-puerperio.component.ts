import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtencionPuerperioService } from 'src/app/servicios/atencion-puerperio/atencion-puerperio.service';
import { AtencionesPuerperio, AtencionPuerperioInterface, Parto } from 'src/app/servicios/atencion-puerperio/interface/atencion-puerperio-interface';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';

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
      console.log(respuesta)
      this.PARTO = respuesta.PARTOS[0]
      this.ATENCIONES_PUERPERIO = respuesta.AtencionesPuerperios
    })
  }

  generar_citas() {
    this.atencion_serv.generar_citas(this.PARTO.ID_ATENCION_PARTO).subscribe(respuesta => {
      console.log(respuesta)
      this.cargarAtencionPuerperio()
    })
  }


}
