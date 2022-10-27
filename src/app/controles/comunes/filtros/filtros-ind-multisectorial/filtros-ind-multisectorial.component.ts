import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-filtros-ind-multisectorial',
  templateUrl: './filtros-ind-multisectorial.component.html',
  styleUrls: ['./filtros-ind-multisectorial.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FiltrosIndMultisectorialComponent),
    multi: true
  }]
})
export class FiltrosIndMultisectorialComponent implements OnInit,ControlValueAccessor {

  constructor() { }
  
  @Output('selecciono_indicador_ev')
  selecciono_indicador_ev:EventEmitter<any>= new EventEmitter<any>()

  ngOnInit(): void {
  }
  indicador=''

  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.indicador = obj
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

  selecciono_indicador(E:any){

    this.selecciono_indicador_ev.emit(E)

  }


  INDICADORES= [
    {IND:'IND_01',DESC:'% niños de 4 meses que inician gotas de hierro'},
    {IND:'IND_02',DESC:'% niños entre 6 y 8 meses con tamizaje de anemia'},
    {IND:'IND_03',DESC:'% niños sin diagnóstico de anemia de entre 180 y 360 días de edad que han recibido suplementación entre los días 170-364'},
    {IND:'IND_04',DESC:'%Tratamiento contra Anemia'},
    {IND:'IND_05',DESC:'% niños menores de un año de edad que recibieron control CRED según edad'},
    {IND:'IND_06',DESC:'% niños menores de un año de edad que recibieron vacuna rotavirus y neumococo según edad'},

  ]

}
