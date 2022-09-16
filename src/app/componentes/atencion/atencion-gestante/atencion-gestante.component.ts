import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataGestanteInterface } from 'src/app/interface/data-gestante-interface';
import { TipoSeguro } from 'src/app/interface/tipo-seguro';
import { AtencionGestanteService } from 'src/app/servicios/atencion/atencion-gestante.service';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { TipoSeguroService } from 'src/app/servicios/maestros/tipo-seguro.service';
import * as moment from 'moment';
import Swal from 'sweetalert2'
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';

@Component({
  selector: 'app-atencion-gestante',
  templateUrl: './atencion-gestante.component.html',
  styleUrls: ['./atencion-gestante.component.scss']
})
export class AtencionGestanteComponent implements OnInit {

  constructor(private estados: EstadoServiceService, private segurs: TipoSeguroService, private fb: FormBuilder, private atencion_gestante: AtencionGestanteService,
    private atencionreg_rep: AtencionRegService) { }

  gestante: DataGestanteInterface = this.estados.paciente
  seguro!: TipoSeguro | undefined
  informacion_gestante_form!: FormGroup
  informacion_para_gestacion_form!: FormGroup
  riesgos_gestacion_form!:FormGroup

  estado = 'crear'
  id_atencion = 0
  atenciones_reg:any[]=[]


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
    this.riesgos_gestacion_form=this.fb.group({
      riesgos:'',
      tipo_riesgo:''

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

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Se actualizo correctamente'
      })

    }, error => {

      if (error.error.message == 'No existe Atencion') { }
      else {
        alert(JSON.stringify(error))

      }


    })





  }

  Actualizar_Atencion() {




    let data = {
      informacion_gestante_form: this.informacion_gestante_form.value,
      informacion_para_gestacion_form: this.informacion_para_gestacion_form.value
    }


    this.atencion_gestante.actualizar_atencion(this.estados.paciente.NRO_HCL, data).subscribe(respuesta => {




      this.id_atencion = respuesta.ID_ATENCION

      this.atencionreg_rep.cargar_atencion_reg(this.id_atencion).subscribe(data => {
        console.log(data)
        this.atenciones_reg=data

      })


      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Se actualizo correctamente'
      })

    }, error => {
      alert(JSON.stringify(error))
    })





  }
  CargarAtencion() {


    this.atencion_gestante.devolver_atencion(this.estados.paciente.NRO_HCL).subscribe(respuesta => {


      this.id_atencion = respuesta.ID_ATENCION

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

      this.atencionreg_rep.cargar_atencion_reg(this.id_atencion).subscribe(data => {
        this.atenciones_reg=data
        console.log(data)
      })


      this.estado = 'actualizar'



    },
      error => {

        if (error.error.message == 'No existe Atencion') { }
        else {
          alert(JSON.stringify(error))

        }


      })

  }

}
