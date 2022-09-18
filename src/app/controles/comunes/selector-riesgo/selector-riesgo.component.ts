import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RiesgosService } from 'src/app/servicios/maestros/riesgos.service';

@Component({
  selector: 'app-selector-riesgo',
  templateUrl: './selector-riesgo.component.html',
  styleUrls: ['./selector-riesgo.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorRiesgoComponent),
    multi: true
  }]
})
export class SelectorRiesgoComponent implements OnInit, ControlValueAccessor {

  constructor(private riesgo_s: RiesgosService) { }
  riesgo = {}
  onChange = (e: any) => { }
  onTouch = () => { }
  estado = false
  writeValue(obj: any): void {
    console.log(obj)
    this.riesgo = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.estado = isDisabled
  }
  riesgos: any[] = []

  ngOnInit(): void {
    this.cargar_riesgos()
  }

  cargar_riesgos() {
    this.riesgo_s.devolver_riesgos().subscribe(res => {
      this.riesgos = res
      console.log(this.riesgos)
    })


  }
  seleciono_riesgo() {

    console.log(this.riesgo)

    this.onChange( this.riesgo)
  }

}
