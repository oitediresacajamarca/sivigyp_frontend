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


  ambito:string=''

  constructor() { }

  ngOnInit(): void {
  }
  selecciono_red(e:any){



    this.microred.cargar_microred_por_red(e)

  }
  seleciono_microred(e:any)
  {


    this.ipress.cargar_ipress_por_microred(e)

  }

  selecciono_ipress(e:any){

    this.selecciono_ambito.emit(e)

    console.log(e)

  }

}
