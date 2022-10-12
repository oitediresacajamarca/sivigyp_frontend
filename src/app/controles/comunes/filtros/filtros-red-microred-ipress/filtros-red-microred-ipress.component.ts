import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SelectorIpressComponent } from '../../selector-ipress/selector-ipress.component';
import { SelectorMicroredComponent } from '../../selector-microred/selector-microred.component';

@Component({
  selector: 'app-filtros-red-microred-ipress',
  templateUrl: './filtros-red-microred-ipress.component.html',
  styleUrls: ['./filtros-red-microred-ipress.component.scss']
})
export class FiltrosRedMicroredIpressComponent implements OnInit {

  @ViewChild('microred')
  microred!:SelectorMicroredComponent
  @ViewChild('ipress')
  ipress!:SelectorIpressComponent

  @Output('selecciono_ambito')
  selecciono_ambito:EventEmitter<any>=new EventEmitter()


  @Output('selecciono_ambito_2')
  selecciono_ambito_2:EventEmitter<any>=new EventEmitter()

  ambito_filtrado={ID_RED:0,ID_MICRORED:0,ID_IPRESS:0}


  ambito:string=''

  constructor() { }

  ngOnInit(): void {
  }
  selecciono_red(e:any){



    this.microred.cargar_microred_por_red(e)
    this.ambito_filtrado.ID_RED=e
    this.ambito_filtrado.ID_MICRORED=0
    this.ambito_filtrado.ID_IPRESS=0
    this.selecciono_ambito_2.emit(this.ambito_filtrado)

  }
  seleciono_microred(e:any)
  {


    this.ipress.cargar_ipress_por_microred(e)

    this.ambito_filtrado.ID_MICRORED=e
    this.ambito_filtrado.ID_IPRESS=0
    this.selecciono_ambito_2.emit(this.ambito_filtrado)

  }

  selecciono_ipress(e:any){


    this.selecciono_ambito.emit(e)


    this.ambito_filtrado.ID_IPRESS=e
    this.selecciono_ambito_2.emit(this.ambito_filtrado)

  }

}
