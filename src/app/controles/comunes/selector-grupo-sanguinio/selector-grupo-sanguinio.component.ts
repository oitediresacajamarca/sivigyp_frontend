import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-grupo-sanguinio',
  templateUrl: './selector-grupo-sanguinio.component.html',
  styleUrls: ['./selector-grupo-sanguinio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorGrupoSanguinioComponent),
    multi: true
  }]
})
export class SelectorGrupoSanguinioComponent implements OnInit,ControlValueAccessor {

  constructor() { }
  grupos_sanguineos=[{ID:'O'},{ID:'A'},{ID:'B'},{ID:'AB'},{ID:'N.R.'}]
  grupo_sanguineo=''

  ngOnInit(): void {
  }
  selecciono_grupo_sanguinio(e:any){
    this.onChange(e)

  }

  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.grupo_sanguineo = obj
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
