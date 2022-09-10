import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataGestanteInterface } from 'src/app/interface/data-gestante-interface';
import { TipoSeguro } from 'src/app/interface/tipo-seguro';
import { AtencionGestanteService } from 'src/app/servicios/atencion/atencion-gestante.service';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { TipoSeguroService } from 'src/app/servicios/maestros/tipo-seguro.service';
import * as moment from 'moment';

@Component({
  selector: 'app-atencion-gestante',
  templateUrl: './atencion-gestante.component.html',
  styleUrls: ['./atencion-gestante.component.scss']
})
export class AtencionGestanteComponent implements OnInit {

  constructor(private estados: EstadoServiceService, private segurs: TipoSeguroService, private fb: FormBuilder, private atencion_gestante: AtencionGestanteService) { }

  gestante: DataGestanteInterface = this.estados.paciente
  seguro!: TipoSeguro | undefined
  informacion_gestante_form!: FormGroup
  informacion_para_gestacion_form!: FormGroup
  estado = 'crear'


  ngOnInit(): void {
    this.informacion_gestante_form = this.fb.group({
      fecha_registro: '',
      fecha_ultima_regla: '',
      numero_gestaciones: '',
      recien_nacidos_termino: '',
      recien_nacidos_prematuros: '',
      numero_abortos: '',
      numero_hijos_vivos: ''

    })
    this.informacion_para_gestacion_form = this.fb.group({
      fecha_confirmacion_gestacion: '',
      fecha_probable_parto: '',


    })


    this.completar_data()
    this.CargarAtencion()



  }
  completar_data() {
    this.agregar_seguro()


  }
  agregar_seguro() {
    this.seguro = this.segurs.devolver_seguro(this.gestante.TIPO_SEGURO)

  }
  Guardar_Atencion() {


    let data = {
      informacion_gestante_form: this.informacion_gestante_form.value,
      informacion_para_gestacion_form: this.informacion_para_gestacion_form.value
    }


    this.atencion_gestante.nueva_atencion(this.estados.paciente.NRO_HCL, data).subscribe(respuesta => {

      console.log(respuesta)

    }, error => {

      if(error.error.message=='No existe Atencion'){}
      else{
       alert(JSON.stringify(error))

      }

      alert(JSON.stringify(error))
    })





  }

  Actualizar_Atencion() {


    let data = {
      informacion_gestante_form: this.informacion_gestante_form.value,
      informacion_para_gestacion_form: this.informacion_para_gestacion_form.value
    }


    this.atencion_gestante.actualizar_atencion(this.estados.paciente.NRO_HCL, data).subscribe(respuesta => {
      console.log('actualizar')

      console.log(respuesta)

    }, error => {
      alert(JSON.stringify(error))
    })





  }
  CargarAtencion() {

    console.log(this.estados.paciente.NRO_HCL)

    this.atencion_gestante.devolver_atencion(this.estados.paciente.NRO_HCL).subscribe(respuesta => {


      this.informacion_gestante_form.patchValue({
        fecha_registro: respuesta.FEC_REGISTRO,
        fecha_ultima_regla: respuesta.FUR_ATENCION,
        numero_gestaciones: respuesta.NRO_GESTACIONES,
        recien_nacidos_termino: respuesta.RECIEN_NACIDOS_TERMINO,
        recien_nacidos_prematuros: respuesta.RECIEN_NACIDOS_PREMATUROS,
        numero_abortos: respuesta.NUMERO_ABORTOS,
        numero_hijos_vivos: respuesta.HIJOS_VIVOS
      })

      this.informacion_para_gestacion_form.patchValue({
        fecha_confirmacion_gestacion: respuesta.FECHA_CONFIRMO_GESTACION,
      fecha_probable_parto: respuesta.FECHA_POSIBLE_PARTO,

      })

      this.estado = 'actualizar'



    },
      error => {

       if(error.error.message=='No existe Atencion'){}
       else{
        alert(JSON.stringify(error))

       }


      })

  }

}
