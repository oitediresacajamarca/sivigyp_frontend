import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-parto',
  templateUrl: './registro-parto.component.html',
  styleUrls: ['./registro-parto.component.scss']
})
export class RegistroPartoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formPartoReg!: FormGroup

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
      EDAD_GESTACIONAL: ''
    })

  }
  REGISTRAR_PARTO() {
    console.log(this.formPartoReg.value)
  }

}
