import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-cita-gestante',
  templateUrl: './agregar-cita-gestante.component.html',
  styleUrls: ['./agregar-cita-gestante.component.scss']
})
export class AgregarCitaGestanteComponent implements OnInit {

  constructor() { }
  FECHA_NUEVA_CITA: Date = new Date()
  mostrar: boolean = false

  @Input('ID_ATENCION')
  ID_ATENCION:number=0

  @Output('acepto_nueva_cita')
  acepto_nueva_cita:EventEmitter<any>= new EventEmitter<any>()


  ngOnInit(): void {
  }

  Aceptar() {

    this.acepto_nueva_cita.emit({ID_ATENCION:this.ID_ATENCION,FECHA_NUEVA_CITA:this.FECHA_NUEVA_CITA})
    this.mostrar = false
  }
  Cancelar() {
    this.mostrar = false
  }

}
