import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';


@Component({
  selector: 'app-reprogramar-atencion-puerperio',
  templateUrl: './reprogramar-atencion-puerperio.component.html',
  styleUrls: ['./reprogramar-atencion-puerperio.component.scss']
})
export class ReprogramarAtencionPuerperioComponent implements OnInit {

  constructor() { }

  @Input('id_atencion_cita')
  id_atencion_cita:number=0

  @Output('acepto_reprogramar')
  acepto_reprogramar:EventEmitter<any> = new EventEmitter<any>()

  fecha_reprogramacion:Date= new Date()

  mostrar=false


  ngOnInit(): void {
  }
  ACEPTAR(){
    this.acepto_reprogramar.emit({fecha:this.fecha_reprogramacion,id_atencion:this.id_atencion_cita})
    this.mostrar=false
  }
  CANCELAR(){
    this.mostrar=false
  }

}
