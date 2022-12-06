import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { SelectorDistritoNacComponent } from '../../selectores-geograficos/selector-distrito/selector-distrito.component';
import { SelectorEstablecNacComponent } from '../../selectores-geograficos/selector-establec-nac/selector-establec-nac.component';
import { SelectorProvinciaNacComponent } from '../../selectores-geograficos/selector-provincia/selector-provincia.component';

@Component({
  selector: 'app-fitros-departamento-provincia-distrito-establec-nacional',
  templateUrl: './fitros-departamento-provincia-distrito-establec-nacional.component.html',
  styleUrls: ['./fitros-departamento-provincia-distrito-establec-nacional.component.scss']
})
export class FitrosDepartamentoProvinciaDistritoEstablecNacionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('provincia')
  provincias!: SelectorProvinciaNacComponent
  @ViewChild('distrito')
  distrito!: SelectorDistritoNacComponent
  @ViewChild('establec')
  establec!: SelectorEstablecNacComponent
  

  seleciono_departamento(e: any) {

    this.provincias.cod_dep = e
    this.provincias.cargar_provincias()
  }
  selecciono_provincia(e: any) {
    console.log(e)
    this.distrito.cargar_distrito_por_provincia(e)

  }

  selecciono_distrito(e:any){
    console.log(e)
    this.establec.UBIGEO=e
    this.establec.cargar_establecimientos()
  }

}
