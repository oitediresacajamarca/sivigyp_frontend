import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectorCentroPobladoComponent } from 'src/app/controles/comunes/selector-centro-poblado/selector-centro-poblado.component';
import { SelectorDistritoComponent } from 'src/app/controles/comunes/selector-distrito/selector-distrito.component';
import { MstPacienteService } from 'src/app/servicios/risc/mst-paciente.service';
import * as moment from 'moment';
import { HistoriaClinicaService } from 'src/app/servicios/historia-clinica/historia-clinica.service';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-gestante',
  templateUrl: './nueva-gestante.component.html',
  styleUrls: ['./nueva-gestante.component.scss']
})
export class NuevaGestanteComponent implements OnInit {

  constructor(private mst_per: MstPacienteService, private fb: FormBuilder, private persona_hc: HistoriaClinicaService, private estados_s: EstadoServiceService, private route: Router) { }

  nro_documento = ''
  datos_generales!: FormGroup
  datos_complemntarios!: FormGroup


  @ViewChild('selector_distrito')
  selector_distrito!: SelectorDistritoComponent

  @ViewChild('selector_centro_poblado')
  selector_centro_poblado!: SelectorCentroPobladoComponent



  selecciono_provincia(e: any) {

    this.selector_distrito.cargar_distrito_por_provincia(e)
  }

  selecciono_distrito(e: any) {
    this.selector_centro_poblado.cargar_centro_poblador_por_distrito(e)
  }

  Buscar_Persona() {


    this.mst_per.devolver_mst_paciente(this.datos_generales.value.nro_documento).subscribe(per => {
      per.fecha_nacimiento = moment(per.fecha_nacimiento).format("yyyy-MM-DD")


      this.datos_generales.patchValue(per)



    }, error => { alert('error de conexion de internet') })

  }

  ngOnInit(): void {

    this.datos_generales = this.fb.group(
      {
        'nro_documento': '', 'nombres': '',
        'apellido_paterno': '',
        'apellido_materno': '',
        'fecha_nacimiento': '',
        'provincia': '',
        'distrito': '',
        'centro_poblado': '',
        'direccion': '',
        'correo': '',
        'numero_telefono': '',
        'beneficiaria_juntos': '',
        COD_IPRESS: this.estados_s.devolver_ambito_actual().cod_ambito
      })

    this.datos_complemntarios = this.fb.group(
      {
        'grado_instruccion': '',
        'idioma': '',
        'religion': '',
        'estado_civil': '',
        'tipo_seguro': '',
        'grupo_sanguineo': '',
        'factor_sanguineo': '',


      })
  }
  mensaje = false

  Guardar() {


    this.datos_generales.patchValue({ COD_IPRESS: this.estados_s.devolver_ambito_actual().cod_ambito })
    this.persona_hc.nueva_historia_clinica(this.datos_generales.value.nro_documento,
      { persona: this.datos_generales.value, datos_complementarios: this.datos_complemntarios.value }
    ).subscribe(resultado => {
      console.log(resultado)
      this.route.navigate(['/sivigyp/principal/', 'registro-gestante'])

    }, error => { alert('error' + JSON.stringify(error)); })
  }

}
