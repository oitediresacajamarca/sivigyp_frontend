import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Distrito } from 'src/app/interface/data-gestante-interface';
import { DistritoService } from 'src/app/servicios/maestros/distrito.service';

@Component({
  selector: 'app-selector-distrito',
  templateUrl: './selector-distrito.component.html',
  styleUrls: ['./selector-distrito.component.scss']
})
export class SelectorDistritoComponent implements OnInit {

  constructor(private distr_ser: DistritoService) { }
  distritos_dat: Distrito[] = []

  @Output('selecciono_distrito')
  selecciono_distrito = new EventEmitter()

  ngOnInit(): void {
  }
  cargar_distrito_por_provincia(cod_provincia: string) {
    this.distr_ser.devolver_distritos_por_provincia(cod_provincia).subscribe(data => {
      this.distritos_dat = data
    })
  }
  selecciono_dis(e: any) {
    this.selecciono_distrito.emit(e)
  }


}
