import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Provincias } from 'src/app/interface/provincia-interface';
import { ProvinciaService } from 'src/app/servicios/maestros/provincia.service';

@Component({
  selector: 'app-selector-provincia',
  templateUrl: './selector-provincia.component.html',
  styleUrls: ['./selector-provincia.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorProvinciaComponent),
    multi: true
  }]
})
export class SelectorProvinciaComponent implements OnInit, ControlValueAccessor {

  provincia = '';
  onchang: any=(e:any)=>{};
  touched = false
  onTouch = () => { }

  constructor(private provincia_s: ProvinciaService) { }
  writeValue(obj: any): void {

    this.provincia = obj;
  }
  registerOnChange(fn: any): void {
    this.onchang = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  provincias_dat: Provincias[] = []
  @Output('seleciono_provincia')
  seleciono_provincia: EventEmitter<string> = new EventEmitter<string>()


  ngOnInit(): void {
    this.cargar_provincias()
  }
  cargar_provincias() {
    this.provincia_s.devolver_provincias().subscribe(datos => {
      this.provincias_dat = datos;
    }, error => {
      alert('error de coneccion')
    })
  }
  selecciono_prov(e: any) {



    this.onchang(e)

    this.seleciono_provincia.emit(e)

  }

}
