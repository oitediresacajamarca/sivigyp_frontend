import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-atencion-pf',
  templateUrl: './atencion-pf.component.html',
  styleUrls: ['./atencion-pf.component.scss']
})
export class AtencionPfComponent implements OnInit {

  public mostrar: boolean = false;


  @Output('acepto_dialogo')
  acepto_dialogo: EventEmitter<any> = new EventEmitter<any>()

  METODO = ''
  ID_ATENCION_PUERPERIO=0

  constructor() { }

  selecciono_metodo(e: any) {





  }


  ngOnInit(): void {
  }

  ACEPTAR() {

    this.acepto_dialogo.emit({METODO:this.METODO,ID_ATENCION:this.ID_ATENCION_PUERPERIO})
    this.mostrar=false
  }
  CANCELAR(){
    this.mostrar=false
  }
}
