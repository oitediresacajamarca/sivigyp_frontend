import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-tipo-seguro',
  templateUrl: './selector-tipo-seguro.component.html',
  styleUrls: ['./selector-tipo-seguro.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorTipoSeguroComponent),
    multi: true
  }]
})
export class SelectorTipoSeguroComponent implements OnInit,ControlValueAccessor {

  constructor() { }
  tipo_seguro=''


 tip_seguros= [{"ID_TIPO_SEGURO":1,"NOMBRE":"SISTEMA INTEGRADO DE SALUD","ABRV":"SIS","ESTADO":1},{"ID_TIPO_SEGURO":2,"NOMBRE":"ESSALUD","ABRV":"ESSALUD","ESTADO":1},{"ID_TIPO_SEGURO":3,"NOMBRE":"SANIDAD","ABRV":"SANIDAD","ESTADO":1},{"ID_TIPO_SEGURO":4,"NOMBRE":"NINGUNO","ABRV":"NINGUNO","ESTADO":1},{"ID_TIPO_SEGURO":5,"NOMBRE":"OTRO","ABRV":"OTRO","ESTADO":1}]
  ngOnInit(): void {
  }

  selecciono_tipo_seguro(e:any){

    this.onChange(e)

  }

  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.tipo_seguro = obj
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

}
