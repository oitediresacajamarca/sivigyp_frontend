import { Component, Input, OnInit } from '@angular/core';
import { AtencionReg } from 'src/app/interface/atencion-reg';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';

@Component({
  selector: 'app-programacion-citas',
  templateUrl: './programacion-citas.component.html',
  styleUrls: ['./programacion-citas.component.scss']
})
export class ProgramacionCitasComponent implements OnInit {

  constructor(private atencion_reg_service: AtencionRegService) { }
  fecha_asignar!: Date

  @Input('atencion')
  atencion!: any



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

    this.atencion_reg_service.atender(ID_ATENCION, {}).subscribe(respuesta => {
      aten = respuesta
      this.Cargar_Atencion_Reg()

    })
  }

  Registrar_No_Atencion(ID_ATENCION: number, aten: any){
    this.atencion_reg_service.no_atender(ID_ATENCION, {}).subscribe(respuesta => {
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
      this.atenciones_reg = respuesta
    })




  }




}
