import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-factor-sanguinio',
  templateUrl: './selector-factor-sanguinio.component.html',
  styleUrls: ['./selector-factor-sanguinio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorFactorSanguinioComponent),
    multi: true
  }]
})
export class SelectorFactorSanguinioComponent implements OnInit,ControlValueAccessor {
  factor_sanguinio=''

  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  constructor() { }
  factor_sanguineos=[{ID:'N.R.'},{ID:'POSITIVO'},{ID:'NEGATIVO'}]
  selecciono_factor_sanguinio(e:any){
    this.onChange(e)

  }

  writeValue(obj: any): void {
    this.factor_sanguinio = obj
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

  ngOnInit(): void {
  }

}
