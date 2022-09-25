import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filtros-rango-entre-fechas',
  templateUrl: './filtros-rango-entre-fechas.component.html',
  styleUrls: ['./filtros-rango-entre-fechas.component.scss']
})
export class FiltrosRangoEntreFechasComponent implements OnInit {

  constructor() { }

  @Output('selecciono_rango')
  selecciono_rango: EventEmitter<any> = new EventEmitter()

  desde!: Date
  hasta!: Date




  ngOnInit(): void {
  }

  selecciono_desde(e: any) {

    this.desde = e



  }
  selecciono_hasta(e: any) {
    this.hasta = e
    this.selecciono_rango.emit({desde:this.desde,hasta:this.hasta})
  }

}
