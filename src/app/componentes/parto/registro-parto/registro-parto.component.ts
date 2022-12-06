import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { AtencionPartoService } from 'src/app/servicios/atencion-parto/atencion-parto.service';

@Component({
  selector: 'app-registro-parto',
  templateUrl: './registro-parto.component.html',
  styleUrls: ['./registro-parto.component.scss']
})
export class RegistroPartoComponent implements OnInit {

  constructor(private fb: FormBuilder, private activa_route: ActivatedRoute, private atencion_parto_serv: AtencionPartoService) { }
  formPartoReg!: FormGroup

  ID_ATENCION!: number;
  PARTOS: any[] = []
  nacimiento = 0;
  TIPO_PARTO = 0;



  ngOnInit(): void {
    this.formPartoReg = this.fb.group({
      ID_ATENCION_PARTO: '',
      ID_ATENCION: '',
      FECHA_PARTO: '',
      HORA_PARTO: '',
      TIPO_PARTO: '',
      LUGAR_PARTO: '',
      ID_ATENDIO_PARTO: '',
      TIPO_RECIEN_NACIDO: '',
      RN_VIVO: '',
      RN_SEXO: '',
      RN_PESO: '',
      USU: '',
      FEC_REGISTRO: '',
      EDAD_GESTACIONAL: '',
      NACIMIENTOS: this.fb.array([this.fb.group({
        RN_VIVO: '',
        RN_SEXO: '',
        RN_PESO: ''
      })])
    })

    this.activa_route.params.subscribe(params => {

      this.ID_ATENCION = params['id_atencion'];

    })
    this.CARGAR_PARTOS()

  }
  REGISTRAR_PARTO() {


    this.atencion_parto_serv.Registrar_Parto(this.ID_ATENCION, this.formPartoReg.value).subscribe(respuesta => {
      this.CARGAR_PARTOS()

    }, error => alert(JSON.stringify(error)))

  }
  CARGAR_PARTOS() {
    this.atencion_parto_serv.Cargar_Partos(this.ID_ATENCION).subscribe(respuesta => {

      this.PARTOS = respuesta
    }
    )
  }
  get NACIMIENTOS_FORM() {
    return this.formPartoReg.controls['NACIMIENTOS'] as FormArray
  }

  async agregar_nacimiento() {
    this.NACIMIENTOS_FORM.push(this.fb.group({
      RN_VIVO: '',
      RN_SEXO: '',
      RN_PESO: ''
    }))

  }
  ABORTO() {
    this.TIPO_PARTO = this.formPartoReg.value.TIPO_PARTO


  }

  selecciono_tipo_recien() {
    if (this.formPartoReg.controls['TIPO_RECIEN_NACIDO'].value == 5 && this.NACIMIENTOS_FORM.length == 1) {
      this.agregar_nacimiento()
    }
    else {

    }
  }
  eliminar_parto(data: any) {

    console.log(data)
    this.atencion_parto_serv.Eliminar_Parto(data).subscribe(respuesta => {
     this.CARGAR_PARTOS()
    },error=>{
      alert('error de conexion a internet')
    })
  }

}
