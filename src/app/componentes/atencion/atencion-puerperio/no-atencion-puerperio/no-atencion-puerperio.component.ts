import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-atencion-puerperio',
  templateUrl: './no-atencion-puerperio.component.html',
  styleUrls: ['./no-atencion-puerperio.component.scss']
})
export class NoAtencionPuerperioComponent implements OnInit {

  constructor() { }
  mostrar = false;
  OBSERVACION:string=''
  id_atencion_cita:number=0
  @Output('acepto_no_atender')
  acepto_no_atender:EventEmitter<any> = new EventEmitter<any>()

  ngOnInit(): void {
  }
  CANCELAR(){
    this.mostrar=false
  }
  ACEPTAR(){
    this.acepto_no_atender.emit({OBSERVACION:this.OBSERVACION,id_atencion:this.id_atencion_cita})
    this.mostrar=false
  }

}
