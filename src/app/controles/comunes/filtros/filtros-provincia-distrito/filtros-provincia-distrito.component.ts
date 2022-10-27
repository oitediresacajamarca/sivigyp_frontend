import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { SelectorDistritoComponent } from '../../selector-distrito/selector-distrito.component';

@Component({
  selector: 'app-filtros-provincia-distrito',
  templateUrl: './filtros-provincia-distrito.component.html',
  styleUrls: ['./filtros-provincia-distrito.component.scss']
})
export class FiltrosProvinciaDistritoComponent implements OnInit {

  @Output('selecciono_ambito')
  selecciono_ambito:EventEmitter<any>= new EventEmitter<any>()

  constructor() { }

  @ViewChild('DISTRITOS')
  DISTRITOS!: SelectorDistritoComponent

  ngOnInit(): void {
  }

  selecciono_provincia(e: any) {

    this.selecciono_ambito.emit(e)
    this.DISTRITOS.cargar_distrito_por_provincia(e)
  }

  selecciono_distrito(e:any){

    this.selecciono_ambito.emit(e)

  }


  filtra_distritos() {
    this.DISTRITOS.cargar_distrito_por_provincia('1')
  }

}
