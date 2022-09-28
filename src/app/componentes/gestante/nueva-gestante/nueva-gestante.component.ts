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
  encontrado=true
  encontrdao_fec_nac=true


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



    this.datos_generales.controls['nombres'].reset();

    this.datos_generales.controls['apellido_paterno'].reset();
    this.datos_generales.controls['apellido_materno'].reset();
    this.datos_generales.controls['fecha_nacimiento'].reset();




    this.mst_per.devolver_mst_paciente(this.datos_generales.value.nro_documento).subscribe(per => {
      console.log(per)
      // this.desabilitar()
      if (per != undefined) {
        if (per.fecha_nacimiento != undefined) {
       //   this.datos_generales.controls['fecha_nacimiento'].()
          per.fecha_nacimiento = moment(per.fecha_nacimiento).format("yyyy-MM-DD")
          this.datos_generales.controls['fecha_nacimiento'].setValue(per.fecha_nacimiento)
          this.encontrdao_fec_nac=true


        } else {

       this.encontrdao_fec_nac=false

        }


        this.encontrado=true
        this.datos_generales.controls['nombres'].setValue(per.nombres)
        this.datos_generales.controls['apellido_paterno'].setValue(per.apellido_paterno)
        this.datos_generales.controls['apellido_materno'].setValue(per.apellido_materno)

      }





    }, error => {

      if (error.error.message === 'no se encontro numero de documento') {

        this.datos_generales.controls['nombres'].reset();

        this.datos_generales.controls['apellido_paterno'].reset();
        this.datos_generales.controls['apellido_materno'].reset();
        this.datos_generales.controls['fecha_nacimiento'].reset();
        this.datos_generales.controls['fecha_nacimiento'].setValue(null)
        this.encontrado=false
        this.encontrdao_fec_nac=false

      }
      else {
        alert('error de conexion a internet')
      }


    })


  }

  ngOnInit(): void {

    this.datos_generales = this.fb.group(
      {
        'nro_documento': '',
        'nombres': '',
        'apellido_paterno': '',
        'apellido_materno':'',
        'fecha_nacimiento': '',
        'provincia': '',
        'distrito': '',
        'centro_poblado': '',
        'direccion': '',
        'correo': '',
        'numero_telefono': '',
        'numero_telefono_adicional': '',
        'beneficiaria_juntos': '',
        COD_IPRESS: this.estados_s.devolver_ambito_actual().cod_ambito
      })

    this.datos_complemntarios = this.fb.group(
      {
        'grado_instruccion': '',
        'idioma': 'CASTELLANO',
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
  habilitar_datos() {

    this.datos_generales.controls['nombres'].enable()
    this.datos_generales.controls['apellido_paterno'].enable()
    this.datos_generales.controls['apellido_materno'].enable()
  }
  desabilitar() {
    this.datos_generales.controls['nombres'].disable()
    this.datos_generales.controls['apellido_paterno'].disable()
    this.datos_generales.controls['apellido_materno'].disable()
  }

}
