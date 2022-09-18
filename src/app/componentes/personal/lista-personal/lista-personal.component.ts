import { Component, OnInit } from '@angular/core';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PersonalService } from 'src/app/servicios/personal/personal.service';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.scss']
})
export class ListaPersonalComponent implements OnInit {

  constructor(private personal_rep: PersonalService, private estado_s: EstadoServiceService) { }
  datos_personal: any[] = []

  ngOnInit(): void {
    this.cargar_personal()
  }
  cargar_personal() {

    this.personal_rep.cargar_personal_ipress(this.estado_s.devolver_ambito_actual().cod_ambito).subscribe(datos => {
      console.log(datos)

      this.datos_personal = datos
    })

  }

}
