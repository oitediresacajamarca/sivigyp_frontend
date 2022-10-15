import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-metodos-planificacion',
  templateUrl: './selector-metodos-planificacion.component.html',
  styleUrls: ['./selector-metodos-planificacion.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorMetodosPlanificacionComponent),
    multi: true
  }]
})
export class SelectorMetodosPlanificacionComponent implements OnInit,ControlValueAccessor {

  constructor() { }
 // metodos:any[]=['INYECTABLE TRIMESTRAL','INYECTABLE MENSUAL','ORAL','USO DIARIO','EMERGENCIA','BARRERA','INPLANTE','ABSTINENCIA PERIODICA']

metodos:any[]=[{"ID_TIPO_PPFF":1,"NOMBRE":"CONDON MASCULINO","ESTADO":1},
{"ID_TIPO_PPFF":2,"NOMBRE":"CONDÓN FEMENINO","ESTADO":1},{"ID_TIPO_PPFF":3,"NOMBRE":"INYECCION TRIMESTRAL","ESTADO":1},{"ID_TIPO_PPFF":4,"NOMBRE":"INYECCIÓN MENSUAL","ESTADO":1},{"ID_TIPO_PPFF":5,"NOMBRE":"ORAL C","ESTADO":1},{"ID_TIPO_PPFF":6,"NOMBRE":"DIU","ESTADO":1},{"ID_TIPO_PPFF":7,"NOMBRE":"IMPLANTE","ESTADO":1},
{"ID_TIPO_PPFF":8,"NOMBRE":"AQVF","ESTADO":1},{"ID_TIPO_PPFF":9,"NOMBRE":"LACTANCIA MATERNO","ESTADO":1}]
  metodo=''

  ngOnInit(): void {
  }

  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.metodo = obj
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
  selecciono_metodo(e:any){

this.onChange(e)
  }


}
