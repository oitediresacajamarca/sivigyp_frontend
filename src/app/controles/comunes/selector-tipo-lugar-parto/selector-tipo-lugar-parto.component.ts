import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-tipo-lugar-parto',
  templateUrl: './selector-tipo-lugar-parto.component.html',
  styleUrls: ['./selector-tipo-lugar-parto.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorTipoLugarPartoComponent),
    multi: true
  }]
})
export class SelectorTipoLugarPartoComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  tipo_lugares: any[] = [{ codigo: 1, nombre: 'DOMICILIARIO' }, { codigo: 2, nombre: 'INSTITUCIONAL' }, { codigo: 3, nombre: 'EN EL TRAYECTO' }]
  tipo_lugar = ''

  ngOnInit(): void {
  }



  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.tipo_lugar = obj
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

  seleciono_tipo_lugar(e: any) {
    this.onChange(e)
  }

}
