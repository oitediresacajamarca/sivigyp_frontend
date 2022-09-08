import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Distrito } from 'src/app/interface/data-gestante-interface';
import { DistritoService } from 'src/app/servicios/maestros/distrito.service';

@Component({
  selector: 'app-selector-distrito',
  templateUrl: './selector-distrito.component.html',
  styleUrls: ['./selector-distrito.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorDistritoComponent),
    multi: true
  }]
})
export class SelectorDistritoComponent implements OnInit, ControlValueAccessor {

  distrito = ''
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;

  constructor(private distr_ser: DistritoService) { }
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
    this.onChange(e)
    this.selecciono_distrito.emit(e)
  }


}
