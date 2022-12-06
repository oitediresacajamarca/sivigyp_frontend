import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstablecimientosNacService } from 'src/app/servicios/establecimientos-nac.service';

@Component({
  selector: 'app-selector-distrito-nac',
  templateUrl: './selector-distrito.component.html',
  styleUrls: ['./selector-distrito.component.scss']
})
export class SelectorDistritoNacComponent implements OnInit {

  distrito = ''
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;

  constructor(private distr_ser: EstablecimientosNacService) { }
  writeValue(obj: any): void {
    this.distrito = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.estado = isDisabled
  }
  distritos_dat: any[] = []

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
    console.log(e)
    this.onChange(e)
    this.selecciono_distrito.emit(e)
  }

}
