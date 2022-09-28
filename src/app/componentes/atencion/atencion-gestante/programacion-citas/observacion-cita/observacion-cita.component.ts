import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';

@Component({
  selector: 'app-observacion-cita',
  templateUrl: './observacion-cita.component.html',
  styleUrls: ['./observacion-cita.component.scss']
})
export class ObservacionCitaComponent implements OnInit {

  constructor(private atension_servis: AtencionRegService) { }

  @Input('mostrar')
  mostrar: boolean = false;
  @Input('accion')
  accion: string = 'atencion'
  @Output('acepto')
  acepto: EventEmitter<any> = new EventEmitter()
  observacion: string = ''
  titulo=''
  ID_ATENCION_REG:number =0


  ngOnInit(): void {
    if(this.accion=='ATENDER'){
      this.titulo='REGISTRAR ATENCION'
    }
    if(this.accion=='NO ATENDER'){
      this.titulo='REGISTRAR NO ATENCION'
    }
  }

  terminar() {

    this.acepto.emit(this.observacion)

    this.mostrar = false
  }
  cancelar() {
    this.mostrar = false
  }

}
