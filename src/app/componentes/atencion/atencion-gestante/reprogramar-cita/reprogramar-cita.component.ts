import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';


@Component({
  selector: 'app-reprogramar-cita',
  templateUrl: './reprogramar-cita.component.html',
  styleUrls: ['./reprogramar-cita.component.scss']
})
export class ReprogramarCitaComponent implements OnInit {

  constructor(private atencion_serv: AtencionRegService) { }
  fecha_reprogramacion!: Date
  observacion: string = '';
  mostrar: boolean = false;

  @Output('reprogramacion_realizada')
  reprogramacion_realizada:EventEmitter<any>= new EventEmitter()


  ID_CITA_REG!: number

  ngOnInit(): void {
  }
  Aceptar() {
    this.atencion_serv.reprogramar(this.ID_CITA_REG, { FECHA: this.fecha_reprogramacion, OBSERVACION: this.observacion }).subscribe(respuesta => {
      console.log(respuesta)
      this.reprogramacion_realizada.emit()
      this.mostrar=false
    })

  }

}
