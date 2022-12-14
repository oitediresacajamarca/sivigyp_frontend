import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectorCentroPobladoComponent } from 'src/app/controles/comunes/selector-centro-poblado/selector-centro-poblado.component';
import { SelectorDistritoComponent } from 'src/app/controles/comunes/selector-distrito/selector-distrito.component';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { HistoriaClinicaService } from 'src/app/servicios/historia-clinica/historia-clinica.service';
import { MstPacienteService } from 'src/app/servicios/risc/mst-paciente.service';
import * as moment from 'moment';

@Component({
  selector: 'app-actualizar-gestante',
  templateUrl: './actualizar-gestante.component.html',
  styleUrls: ['./actualizar-gestante.component.scss']
})
export class ActualizarGestanteComponent implements OnInit {
  constructor(private mst_per: MstPacienteService, private fb: FormBuilder, private persona_hc: HistoriaClinicaService, 
    private estados_s: EstadoServiceService, private route: Router) { }

  nro_documento = ''
  datos_generales!: FormGroup
  datos_complemntarios!: FormGroup
  encontrado = true
  encontrdao_fec_nac = true


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

      // this.desabilitar()
      if (per != undefined) {
        if (per.fecha_nacimiento != undefined) {
          //   this.datos_generales.controls['fecha_nacimiento'].()
          per.fecha_nacimiento = moment(per.fecha_nacimiento).format("yyyy-MM-DD")
          this.datos_generales.controls['fecha_nacimiento'].setValue(per.fecha_nacimiento)
          this.encontrdao_fec_nac = true


        } else {

          this.encontrdao_fec_nac = false

        }


        this.encontrado = true
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
        this.encontrado = false
        this.encontrdao_fec_nac = false

      }
      else {
        alert('error de conexion a internet')
      }


    })


  }

  ngOnInit(): void {

    this.datos_generales = this.fb.group(
      {
        'nro_documento': ['', Validators.required],
        'nombres': ['', Validators.required],
        'apellido_paterno': ['', Validators.required],
        'apellido_materno': ['', Validators.required],
        'fecha_nacimiento': ['', Validators.required],
        'provincia': ['', Validators.required],
        'distrito': ['', Validators.required],
        'centro_poblado': ['', Validators.required],
        'direccion': ['', Validators.required],
        'correo': '',
        'numero_telefono': ['', Validators.required],
        'numero_telefono_adicional': '',
        'beneficiaria_juntos': ['', Validators.required],
        COD_IPRESS: [this.estados_s.devolver_ambito_actual().cod_ambito,Validators.required]
      })
      this.datos_generales.controls['beneficiaria_juntos'].value

    this.datos_complemntarios = this.fb.group(
      {
        'grado_instruccion': ['', Validators.required],
        'idioma': ['', Validators.required],
        'religion': ['', Validators.required],
        'estado_civil': ['', Validators.required],
        'tipo_seguro': ['', Validators.required],
        'grupo_sanguineo': ['', Validators.required],
        'factor_sanguineo': ['', Validators.required],


      })
      this.cargar_datos()
  }
  mensaje = false
  cargar_datos(){
   console.log( this.estados_s.paciente)

    this.datos_generales.patchValue({
      nro_documento:  this.estados_s.paciente.NRO_DOCUMENTO,
      nombres:this.estados_s.paciente.NOMBRES,
      apellido_paterno:this.estados_s.paciente.APELLIDO_PAT,
      apellido_materno:this.estados_s.paciente.APELLIDO_MAT,
      fecha_nacimiento:this.estados_s.paciente.FECHA_NAC,
      provincia:this.estados_s.paciente.provincia.ID_PROVINCIA,
      distrito:this.estados_s.paciente.distrito.ID_DISTRITO,
      centro_poblado:this.estados_s.paciente.ID_CENTRO_POBLADO,
      direccion:this.estados_s.paciente.DIRECCION,
      correo:this.estados_s.paciente.CORREO,
      numero_telefono:this.estados_s.paciente.TELEFONO,
      numero_telefono_adicional:this.estados_s.paciente.TELEFONO_ADICIONAL==null ?'':this.estados_s.paciente.TELEFONO_ADICIONAL,
      beneficiaria_juntos:this.estados_s.paciente.BENEFICIARIA_JUNTOS
    })
    this.datos_complemntarios.patchValue(
    {
      grado_instruccion:this.estados_s.paciente.ID_GRADO_INSTRUCCION,
      idioma:this.estados_s.paciente.IDIOMA,
      religion:this.estados_s.paciente.RELIGION,
      estado_civil:this.estados_s.paciente.ESTADO_CIVIL,
      tipo_seguro:this.estados_s.paciente.TIPO_SEGURO,
      grupo_sanguineo:this.estados_s.paciente.GRUPO_SANGUINEO,
      factor_sanguineo:this.estados_s.paciente.FACTOR_SANGUINEO   

    })

    
  }

  Guardar() {
    console.log({ persona: this.datos_generales.value, datos_complementarios: this.datos_complemntarios.value })

    if (this.datos_generales.valid == true && this.datos_complemntarios.valid == true) {
      this.datos_generales.patchValue({ COD_IPRESS: this.estados_s.devolver_ambito_actual().cod_ambito })

      this.persona_hc.actualizar_historia_clinica(this.estados_s.paciente.ID_HC.toString(),
        { persona: this.datos_generales.value, datos_complementarios: this.datos_complemntarios.value }
      ).subscribe(resultado => {

        this.route.navigate(['/sivigyp/principal/', 'registro-gestante'])

      }, error => { alert('error' + JSON.stringify(error)); })
    }
    if (this.datos_generales.valid == false) {
      alert('datos generales no validos'    )





    }
    if (this.datos_complemntarios.valid == false) {
      alert('datos complementarios no validos')

    }


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
