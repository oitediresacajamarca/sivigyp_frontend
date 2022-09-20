import { Component, Input, OnInit } from '@angular/core';
import { AtencionReg } from 'src/app/interface/atencion-reg';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';

@Component({
  selector: 'app-programacion-citas',
  templateUrl: './programacion-citas.component.html',
  styleUrls: ['./programacion-citas.component.scss']
})
export class ProgramacionCitasComponent implements OnInit {

  constructor( private atencion_reg_service:AtencionRegService) { }
  fecha_asignar!:Date

  @Input('atencion')
  atencion!:any



  @Input('atenciones_reg')
  atenciones_reg:AtencionReg[]=[]

  ngOnInit(): void {
  }
  asignar_fecha(){


  }
  generar_atencion_reg(){



    this.atencion_reg_service.generar_atencion_reg(this.atencion.ID_ATENCION).subscribe(data=>{
      this.atenciones_reg=data

    })

  }

}
