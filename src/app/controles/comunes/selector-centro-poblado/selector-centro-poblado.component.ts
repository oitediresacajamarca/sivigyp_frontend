import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CentroPobladoService } from 'src/app/servicios/maestros/centro-poblado.service';


@Component({
  selector: 'app-selector-centro-poblado',
  templateUrl: './selector-centro-poblado.component.html',
  styleUrls: ['./selector-centro-poblado.component.scss']
})
export class SelectorCentroPobladoComponent implements OnInit {

  constructor(private centr_ser: CentroPobladoService) { }
  centros_poblados_dat: any[] = []

  @Output('seleciono_cp')
  seleciono_cp:EventEmitter<any>= new EventEmitter<any>()

  ngOnInit(): void {
  }

  cargar_centro_poblador_por_distrito(cod_distrito: string) {
    this.centr_ser.devolver_centro_poblado_por_distrito(cod_distrito).subscribe(data => {
      this.centros_poblados_dat = data

    })
  }
  selecciono_cp(e:any){
    this.seleciono_cp.emit(e);

  }


}
