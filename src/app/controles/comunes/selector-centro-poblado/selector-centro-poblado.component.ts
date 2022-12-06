import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CentroPobladoService } from 'src/app/servicios/maestros/centro-poblado.service';


@Component({
  selector: 'app-selector-centro-poblado',
  templateUrl: './selector-centro-poblado.component.html',
  styleUrls: ['./selector-centro-poblado.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorCentroPobladoComponent),
    multi: true
  }]
})
export class SelectorCentroPobladoComponent implements OnInit,ControlValueAccessor {

  centro_poblado=''
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;

  constructor(private centr_ser: CentroPobladoService) { }
  writeValue(obj: any): void {

    this.centro_poblado=obj
    this.cargar_centro_poblador_por_distrito(this.centro_poblado.substring(0,6))
  }
  registerOnChange(fn: any): void {
    this.onChange=fn
  }
  registerOnTouched(fn: any): void {
   this.onTouched=fn
  }
  setDisabledState?(isDisabled: boolean): void {
this.estado=isDisabled
  }
  centros_poblados_dat: any[] = []

  @Output('seleciono_cp')
  seleciono_cp:EventEmitter<any>= new EventEmitter<any>()

  ngOnInit(): void {
  }

  cargar_centro_poblador_por_distrito(cod_distrito: string) {
    this.centr_ser.devolver_centro_poblado_por_distrito(cod_distrito).subscribe(data => {
      this.centros_poblados_dat = data

    })
  }
  selecciono_cp(e:any){
    this.onChange(e)
    this.seleciono_cp.emit(e);

  }


}
