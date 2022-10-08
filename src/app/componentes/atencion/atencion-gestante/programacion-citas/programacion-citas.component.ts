import { createViewChildren } from '@angular/compiler/src/core';
import { IfStmt, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AtencionReg } from 'src/app/interface/atencion-reg';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';
import { ReprogramarCitaComponent } from '../reprogramar-cita/reprogramar-cita.component';
import { ObservacionCitaComponent } from './observacion-cita/observacion-cita.component';

@Component({
  selector: 'app-programacion-citas',
  templateUrl: './programacion-citas.component.html',
  styleUrls: ['./programacion-citas.component.scss']
})
export class ProgramacionCitasComponent implements OnInit {

  constructor(private atencion_reg_service: AtencionRegService) { }
  fecha_asignar!: Date

  observacion: string = ''

  @Input('atencion')
  atencion!: any

  @ViewChild('dialog')
  dialog!: ObservacionCitaComponent

  @ViewChild('dialog_reprogra')
  dialog_reprogra!: ReprogramarCitaComponent



  @Input('atenciones_reg')
  atenciones_reg: AtencionReg[] = []

  ngOnInit(): void {
  }
  asignar_fecha() {


  }
  generar_atencion_reg() {

    console.log(this.atencion)
    this.atencion_reg_service.generar_atencion_reg(this.atencion.ID_ATENCION).subscribe(data => {
      console.log(data)
      this.atenciones_reg = data

    })

  }

  Registrar_Atencion(ID_ATENCION: number, aten: any) {

    this.atencion_reg_service.atender(ID_ATENCION, aten).subscribe(respuesta => {
      aten = respuesta
      this.Cargar_Atencion_Reg()

    })
  }

  Registrar_No_Atencion(ID_ATENCION: number, aten: any) {
    this.atencion_reg_service.no_atender(ID_ATENCION, aten).subscribe(respuesta => {
      aten = respuesta
      this.Cargar_Atencion_Reg()

    })

  }

  Reprogramar_Cita(ID_ATENCION: number, aten: any) {
    this.atencion_reg_service.no_atender(ID_ATENCION, aten).subscribe(respuesta => {
      aten = respuesta
      this.Cargar_Atencion_Reg()

    })

  }

  Eliminar_Atencion(ID_ATENCION: number) {
    this.atencion_reg_service.eliminar(ID_ATENCION).subscribe(respuesta => {
      console.log(respuesta)

      this.Cargar_Atencion_Reg()

    })

  }

  Cargar_Atencion_Reg() {
    this.atencion_reg_service.cargar_atencion_reg(this.atencion.ID_ATENCION).subscribe(respuesta => {
      console.log(respuesta)
      this.atenciones_reg = respuesta
    })




  }

  Abrir_Dialogo(ID_ATENCION_REG: number, aten: any, accion: string) {
    if (accion == 'ATENDER') {
      this.dialog.titulo = 'REGISTRAR ATENCION'
    }
    if (accion == 'NO ATENDER') {
      this.dialog.titulo = 'REGISTRAR NO ATENCION'
    }
    if (accion == 'REPROGRAMAR') {
      this.dialog.titulo = 'REGISTRAR NO ATENCION'
    }

    this.dialog.accion = accion
    this.dialog.ID_ATENCION_REG = ID_ATENCION_REG
    this.dialog.mostrar = true
  }

  aceptar(payload: string) {


    this.observacion = payload


    if (this.dialog.accion == 'ATENDER') {
      this.Registrar_Atencion(this.dialog.ID_ATENCION_REG, { OBSERVACION: this.observacion })
    }

    if (this.dialog.accion == 'NO ATENDER') {
      this.Registrar_No_Atencion(this.dialog.ID_ATENCION_REG, { OBSERVACION: this.observacion })
    }
    if (this.dialog.accion == 'REPROGRAMAR') {
      this.Registrar_No_Atencion(this.dialog.ID_ATENCION_REG, { OBSERVACION: this.observacion })
    }

  }


  Abrir_Dialogo_Reprogamar(ID_ATENCION_REG: number, data: any) {
    this.dialog_reprogra.ID_CITA_REG = ID_ATENCION_REG
    this.dialog_reprogra.mostrar = true
  }

  recargar_atenciones_reg() {
    this.Cargar_Atencion_Reg()

  }



}
