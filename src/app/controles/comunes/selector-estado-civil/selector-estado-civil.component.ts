import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-estado-civil',
  templateUrl: './selector-estado-civil.component.html',
  styleUrls: ['./selector-estado-civil.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorEstadoCivilComponent),
    multi: true
  }]
})
export class SelectorEstadoCivilComponent implements OnInit, ControlValueAccessor {
  estado_civil = ''
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;

  constructor() { }
  writeValue(obj: any): void {
    this.estado_civil = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.estado=isDisabled
  }

  estados_dat: any[] = [{ ID: 1, NOMBRE: 'SOLTERA' }, { ID: 2, NOMBRE: 'CASADA' }, { ID: 3, NOMBRE: 'DIVORCIADA' }, { ID: 4, NOMBRE: 'VIUDA' }, { ID: 5, NOMBRE: 'CONVIVIENTE' }]

  ngOnInit(): void {
  }

  selecciono_estado_civil(e: any) {

    this.onChange(e)
  }
}
