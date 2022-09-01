import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona-hc',
  templateUrl: './buscar-persona-hc.component.html',
  styleUrls: ['./buscar-persona-hc.component.scss']
})
export class BuscarPersonaHcComponent implements OnInit {
  nro_cod_fil = ''

  constructor(private person_s: PersonaService, private estado_s: EstadoServiceService) { }
  @Output('encontro_persona')
  encontro_persona: EventEmitter<any> = new EventEmitter<any>()
  @Output('no_encontro_persona')
  no_encontro_persona: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit(): void {

  }
  estado = 'buscar_en_ipress'
  mostrar_dialogo = false;
  mensaje_dialogo = '';
  mensaje_dialogo_siguiente_paso = ''

  busca_persona() {
    this.encontro_persona.emit([])


    this.person_s.buscar_persona_en_ipress(this.nro_cod_fil, this.estado_s.devolver_ambito_actual().cod_ambito).subscribe(

      data => {
        let pass=false;
        if (data.length == 0) {

/*
          this.mensaje_dialogo = 'No se encuentra ninguna concidencia con el numero de documento ingresado'
          this.mensaje_dialogo_siguiente_paso = 'Desea ingresar esta persona en el sistema'
          this.mostrar_dialogo = true;*/
          pass=true

        }


        if (data.length > 0 && data[0].establecimientos_cantidad == 0) {

          this.mensaje_dialogo = 'Esta persona no se encuentra registrado en este establecimiento '
          this.mensaje_dialogo_siguiente_paso = 'Desea buscarla fuera del establecimiento'
          this.mostrar_dialogo = true;
          pass=true
        }
        if(pass==false){
        this.encontro_persona.emit(data)
        }

      }, error => {
        alert('problemas de conexion de internet')
      }


    );


  }

  acepto_busqueda() {
    this.mostrar_dialogo = false;
    if (this.mensaje_dialogo_siguiente_paso == 'Desea buscarla fuera del establecimiento') {
      this.buscar_fuera_estbalec()

    }

  }
  cancelar() {
    this.mostrar_dialogo = false
  }

  buscar_fuera_estbalec() {

    this.person_s.buscar_persona_hc_en_region(this.nro_cod_fil).subscribe(

      data => {
        console.log(data)
        if (data.length == 0) {

          this.mensaje_dialogo = ''

          this.mostrar_dialogo = true;

        } else {
          this.encontro_persona.emit(data)
        }


      }, error => {
        alert('problemas de conexion de internet')
      }
    );


  }
}
