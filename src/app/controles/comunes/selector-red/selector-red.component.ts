import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { MicroredService } from 'src/app/servicios/maestros/microred.service';
import { RedesService } from 'src/app/servicios/maestros/redes.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-selector-red',
  templateUrl: './selector-red.component.html',
  styleUrls: ['./selector-red.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorRedComponent),
    multi: true
  }]

})
export class SelectorRedComponent implements OnInit, ControlValueAccessor {
  redes_dat: any[] = []
  red = {}
  onChange=(e:any)=>{}
  onTouch=()=>{}

  @Output('cambio_red')
  cambio_red:EventEmitter<any>= new EventEmitter<any>()

  status=true


  constructor(private redes: RedesService, private mired_s: MicroredService) { }
  writeValue(obj: any): void {
    this.red = obj
  }
  registerOnChange(fn: any): void {
   this.onChange=fn

  }
  registerOnTouched(fn: any): void {
   this.onTouch=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.status=isDisabled
  }

  ngOnInit(): void {
    this.cargar_redes()
  }
  cargar_redes() {
    this.redes_dat = this.redes.cargar_redes()

  }
  selecciono_red(e: any) {


    this.onChange(e);
    this.cambio_red.emit(e)


  }


}
