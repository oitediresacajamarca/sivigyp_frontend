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
import { RiesgosService } from 'src/app/servicios/riesgos/riesgos.service';

@Component({
  selector: 'app-atencion-gestante',
  templateUrl: './atencion-gestante.component.html',
  styleUrls: ['./atencion-gestante.component.scss']
})
export class AtencionGestanteComponent implements OnInit {

  constructor(private estados: EstadoServiceService, private segurs: TipoSeguroService, private fb: FormBuilder, private atencion_gestante: AtencionGestanteService,
    private atencionreg_rep: AtencionRegService, private riesgos_serv: RiesgosService) { }

  gestante: DataGestanteInterface = this.estados.paciente
  seguro!: TipoSeguro | undefined
  informacion_gestante_form!: FormGroup
  informacion_para_gestacion_form!: FormGroup
  riesgos_gestacion_form!: FormGroup
  lista_riesgos: any[] = []
  atencion: any

  estado = 'crear'
  id_atencion = 0
  atenciones_reg: any[] = []
  tipo_riesgo = ''

  edad_gestacional_actual: number = 0
  fecha_probable_parto!: Date
  hoy: Date = new Date()
  mostrar_estado_gestacional = false


  ngOnInit(): void {
    this.informacion_gestante_form = this.fb.group({
      fecha_registro: new Date(),
      fecha_atencion_prenatal:new Date(),
      fecha_ultima_regla: '',
      numero_gestaciones: '',
      recien_nacidos_termino: '',
      recien_nacidos_prematuros: '',
      numero_abortos: '',
      numero_hijos_vivos: ''

    })
    this.hoy = new Date()
    this.informacion_para_gestacion_form = this.fb.group({
      fecha_confirmacion_gestacion: '',
      fecha_probable_parto: '',


    })
    this.riesgos_gestacion_form = this.fb.group({
      riesgos: '',
      tipo_riesgo: '',
      nuevo_riesgo: {}

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

      this.atencion = respuesta
      this.edad_gestacional_actual = moment().diff(respuesta.FUR_ATENCION, 'weeks')
      if (this.edad_gestacional_actual >= 42) {
        this.edad_gestacional_actual = 0


      }
      this.fecha_probable_parto = respuesta.FECHA_POSIBLE_PARTO
      if (moment(this.fecha_probable_parto) >= moment(this.hoy)) {


        this.mostrar_estado_gestacional = true
      }
      else {
        this.mostrar_estado_gestacional = false
      }


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



      this.edad_gestacional_actual = moment().diff(respuesta.FUR_ATENCION, 'weeks')
      if (this.edad_gestacional_actual >= 42) {
        this.edad_gestacional_actual = 0

      }
      console.log(this.fecha_probable_parto)
      this.fecha_probable_parto = respuesta.FECHA_POSIBLE_PARTO

      if (moment(this.fecha_probable_parto) >= moment(this.hoy)) {


        this.mostrar_estado_gestacional = true
      }
      else {
        this.mostrar_estado_gestacional = false
      }

      this.id_atencion = respuesta.ID_ATENCION

      this.atencionreg_rep.cargar_atencion_reg(this.id_atencion).subscribe(data => {

        this.atenciones_reg = data

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
      this.lista_riesgos = respuesta.RIESGOS

      console.log(respuesta)
      this.atencion = respuesta
      this.edad_gestacional_actual = moment().diff(respuesta.FUR_ATENCION, 'weeks')
      if (this.edad_gestacional_actual >= 42) {
        this.edad_gestacional_actual = 0

      }

      this.fecha_probable_parto = respuesta.FECHA_POSIBLE_PARTO

      if (moment(this.fecha_probable_parto) >= moment(this.hoy)) {


        this.mostrar_estado_gestacional = true
      }
      else {
        this.mostrar_estado_gestacional = false
      }


      this.id_atencion = respuesta.ID_ATENCION


      this.informacion_gestante_form.patchValue({
        fecha_registro: respuesta.FEC_REGISTRO,
        fecha_atencion_prenatal:respuesta.FECHA_ATENCION_PRENATAL,
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
        this.atenciones_reg = data

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

  AgregarRiesgo() {


    this.lista_riesgos

    let index = this.lista_riesgos.findIndex(dat => {
      return dat.ID_RIESGO == this.riesgos_gestacion_form.value.nuevo_riesgo.ID_RIESGO
    })


    if (index < 0) {

      this.lista_riesgos.push(this.riesgos_gestacion_form.value.nuevo_riesgo)
    }

    if (this.lista_riesgos.length > 0) {
      this.estados.alerta = true
    }

    this.riesgos_serv.asignar_riesgos(this.id_atencion, this.lista_riesgos).subscribe(respuesta => console.log(respuesta))
  }
  seleciono_tipo_riesgo(tipo: string) {
    this.tipo_riesgo = tipo
    if (this.tipo_riesgo == 'BRO') {
      this.eliminar_todos_riesgos()
      if (this.lista_riesgos.length > 0) {
        this.estados.alerta = true
      } else { this.estados.alerta = false }
    }


  }

  eliminar_riesgo(e: any) {
    this.lista_riesgos = this.lista_riesgos.filter(dat => {
      return dat.ID_RIESGO != e.ID_RIESGO
    })
  }
  eliminar_todos_riesgos() {
    this.lista_riesgos = []
  }
  cargar_riesgos() {

  }

  seleciono_fecha_regla() {

    this.informacion_para_gestacion_form.patchValue({ fecha_probable_parto: moment(this.informacion_gestante_form.value.fecha_ultima_regla).add(1, 'year').add(-3, 'month').add(7, 'days').toDate() })

  }

}
