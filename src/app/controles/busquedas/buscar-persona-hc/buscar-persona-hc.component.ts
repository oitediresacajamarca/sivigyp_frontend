import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona-hc',
  templateUrl: './buscar-persona-hc.component.html',
  styleUrls: ['./buscar-persona-hc.component.scss']
})
export class BuscarPersonaHcComponent implements OnInit {
  nro_cod_fil=''

  constructor(private person_s:PersonaService ,private estado_s:EstadoServiceService) { }
  @Output('encontro_persona')
  encontro_persona:EventEmitter<any>= new EventEmitter<any>()
  @Output('no_encontro_persona')
  no_encontro_persona:EventEmitter<any>= new EventEmitter<any>()

  ngOnInit(): void {

  }

  busca_persona(){

    this.person_s.buscar_persona_en_ipress(this.nro_cod_fil,this.estado_s.devolver_ambito_actual().cod_ambito).subscribe(
     data=>{
      this.encontro_persona.emit(data)
     },error=>{
      alert('problemas de conexion de internet')
     }
    );


  }

}
