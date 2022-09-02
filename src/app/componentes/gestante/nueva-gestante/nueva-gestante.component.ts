import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectorCentroPobladoComponent } from 'src/app/controles/comunes/selector-centro-poblado/selector-centro-poblado.component';
import { SelectorDistritoComponent } from 'src/app/controles/comunes/selector-distrito/selector-distrito.component';

@Component({
  selector: 'app-nueva-gestante',
  templateUrl: './nueva-gestante.component.html',
  styleUrls: ['./nueva-gestante.component.scss']
})
export class NuevaGestanteComponent implements OnInit {

  constructor() { }


  @ViewChild('selector_distrito')
  selector_distrito!: SelectorDistritoComponent

  @ViewChild('selector_centro_poblado')
  selector_centro_poblado!: SelectorCentroPobladoComponent



  selecciono_provincia(e: any) {
    console.log(e)
    this.selector_distrito.cargar_distrito_por_provincia(e)
  }

  selecciono_distrito(e: any) {
    this.selector_centro_poblado.cargar_centro_poblador_por_distrito(e)
  }


  ngOnInit(): void {
  }
  mensaje = false

}
