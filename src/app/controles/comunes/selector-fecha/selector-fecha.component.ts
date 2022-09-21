import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-selector-fecha',
  templateUrl: './selector-fecha.component.html',
  styleUrls: ['./selector-fecha.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorFechaComponent),
    multi: true
  }]
})
export class SelectorFechaComponent implements OnInit,ControlValueAccessor {
  valor_fecha!:string

  @Input('disabled')
  disabled:boolean=false

  constructor() { }
  writeValue(obj: Date): void {


  this.valor_fecha=moment(obj).format('yyyy-MM-DD')
  }
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;


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

  selecciono_fecha(e:any){
    console.log(e.target.value)
    this.onChange(e.target.value)

  }
}
