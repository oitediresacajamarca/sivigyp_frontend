import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-religion',
  templateUrl: './selector-religion.component.html',
  styleUrls: ['./selector-religion.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorReligionComponent),
    multi: true
  }]
})
export class SelectorReligionComponent implements OnInit,ControlValueAccessor {

  RELIGION=''

  constructor() { }
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.RELIGION = obj
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


  religiones= ['CATOLICO',
    'EVANGELICO',
    'TESTIGO DE JEOVA',
  'OTROS',



  ]

  selecciono_religion(e:any){
    this.onChange(e)

  }


  ngOnInit(): void {
  }
}
