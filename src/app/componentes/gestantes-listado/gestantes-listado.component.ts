import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGestanteInterface } from 'src/app/interface/data-gestante-interface';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

import { PersonaService } from 'src/app/servicios/persona.service';



@Component({
  selector: 'app-gestantes-listado',
  templateUrl: './gestantes-listado.component.html',
  styleUrls: ['./gestantes-listado.component.scss']
})
export class GestantesListadoComponent implements OnInit {
  selected_row: number = -1;
  paginas = 0;
  counter(i: number) {
    let arr = new Array(i)
    for (let j = 0; j <= i - 1; j++) {
      arr[j] = j
    }

    return arr;
  }
  cargar_pagina(pagina:any){
    this.cargar_data_por_ambito_actual_pagina(pagina)

  }


  filtro: any
  gestante_detalle: DataGestanteInterface =

    {
      "ID_PERSONA": 2,
      "ID_TIPOD": 1,
      "NRO_DOCUMENTO": "42359805",
      "ID_GENERO": 2,
      "NOMBRES": "CONSUELO ",
      "APELLIDO_PAT": "OLIVARES",
      "APELLIDO_MAT": "CAMPOS",
      "ID_DISTRITO": "060701",
      "DIRECCION": "MARAYPAMPA",
      "FECHA_NAC": "1984-02-03T05:00:00.000Z",
      "TELEFONO": '',
      TELEFONO_ADICIONAL:'',
      "CORREO": "PENDIENTE",
      "ID_HC": 0,
      "NRO_HCL": "42359805",
      "COD_IPRESS": "000004791",
      "ID_CENTRO_POBLADO": "0601010001",
      "TIPO_SEGURO": 1,
      "ID_GRADO_INSTRUCCION": 5,
      "BENEFICIARIA_JUNTOS": 0,
      "ESTADO_CIVIL": 5,
      "IDIOMA": "CASTELLANO",
      "RELIGION": '',
      "GRUPO_SANGUINEO": "O",
      "FACTOR_SANGUINEO": "POSITIVO",
      "FEC_REGISTRO": '',
      "ESTADO_HC": '',
      "establecimientos_cantidad": 1,
      "ipress": {
        "COD_IPRESS": "000004791",
        "ID_UE": 1662,
        "ID_DISTRITO": "060701",
        "NOMBRE": "LLAUCAN",
        "DIRECCION": "OTROS CENTRO POBLADO LLAUCAN CENTRO POBLADO LLAUCAN BAMBAMAR",
        "ID_MICRORED": 58,
        "CATEGORIA": "I-3",
        "TELEFONO": "997747817",
        "CORREO": "essrllaucan@hotmail.com"
      },
      "distrito": {
        "ID_DISTRITO": "060701",
        "ID_PROVINCIA": "0607",
        "NOMBRE": "BAMBAMARCA"
      },
      "provincia": {
        "ID_PROVINCIA": "0601",
        "NOMBRE": "CAJAMARCA"
      }
    }


  constructor(private estados_s: EstadoServiceService, private persona_s: PersonaService, private route: Router) { }
  data_encontrada: DataGestanteInterface[] = [];
  fila_ant!: ElementRef

  data_gestante: DataGestanteInterface[] = []


  ngOnInit(): void {



    this.cargar_data_por_ambito_actual()
  }

  Buscar_en_Listado(e: any) {
    if (this.filtro == '') {
      this.data_encontrada = this.data_gestante

      return
    }
    this.data_encontrada = this.data_gestante.filter(data => { return data.NRO_DOCUMENTO == this.filtro })
  }
  visualizar_detalle(data: DataGestanteInterface, index: number) {
    this.gestante_detalle = data;
    this.selected_row = index;
    this.estados_s.paciente = this.gestante_detalle
    console.log(this.estados_s.paciente )



  }

  cargar_data_por_ambito_actual_pagina(pagina:any) {

    this.persona_s.buscar_lista_persona_en_ipress_pagina(this.estados_s.devolver_ambito_actual().cod_ambito,pagina).subscribe(data => {



      this.data_encontrada = data.datos

      this.paginas = data.cantidad_paginas

    })

  }
  cargar_data_por_ambito_actual() {

    this.persona_s.buscar_lista_persona_en_ipress(this.estados_s.devolver_ambito_actual().cod_ambito).subscribe(data => {


      this.data_encontrada = data.datos

      this.paginas = data.cantidad_paginas

    })

  }

  cargar_personas_buscadas(data: any[]) {
    this.data_encontrada = []
   console.log(data)
    if(data[0].ID_HC != undefined){
      console.log(data[0].ID_HC)
this.data_encontrada = data

    }

//this.data_encontrada=data

  }

  Nuevo_Paciente() {
    this.route.navigate(['/sivigyp/principal/', 'NuevoPaciente'])
  }

  EstablecerPaciente() {


    this.estados_s.paciente = this.gestante_detalle

  }


}
