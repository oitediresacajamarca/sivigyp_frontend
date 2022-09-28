import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-atencion-puerperio',
  templateUrl: './atencion-puerperio.component.html',
  styleUrls: ['./atencion-puerperio.component.scss']
})
export class AtencionPuerperioComponent implements OnInit {

  constructor(private persona_serv: PersonaService, private estados:EstadoServiceService) { }
  dni:string=''

  detalle_persona: any = {}



  ngOnInit(): void {
    this.dni=this.estados.paciente.NRO_DOCUMENTO
    this.cargarPersonaDetalle()
  }

  cargarPersonaDetalle() {
    this.persona_serv.buscar_persona_hc_en_region(this.dni).subscribe(respuesta=>{
      console.log(respuesta)
      this.detalle_persona=respuesta[0]

    })

  }


}
