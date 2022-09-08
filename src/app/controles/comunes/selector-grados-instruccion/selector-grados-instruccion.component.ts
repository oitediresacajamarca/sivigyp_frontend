import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GradoInstruccionService } from 'src/app/servicios/maestros/grado-instruccion.service';

@Component({
  selector: 'app-selector-grados-instruccion',
  templateUrl: './selector-grados-instruccion.component.html',
  styleUrls: ['./selector-grados-instruccion.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorGradosInstruccionComponent),
    multi: true
  }]

})
export class SelectorGradosInstruccionComponent implements OnInit,ControlValueAccessor {
  grados_dat: any[] = []
  grado_instruccion=''

  constructor(private grados_ser: GradoInstruccionService) { }
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.grado_instruccion = obj
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
    this.cargar_grados()
  }
  cargar_grados() {
    this.grados_ser.cargar_grados_instruccion().subscribe(data => {
      this.grados_dat = data;
    })
  }

  selecciono_grad(e:any){
    this.onChange(e)

  }

}
