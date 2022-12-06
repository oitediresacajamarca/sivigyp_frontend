import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EstablecimientosNacService } from 'src/app/servicios/establecimientos-nac.service';

@Component({
  selector: 'app-selector-departamento',
  templateUrl: './selector-departamento.component.html',
  styleUrls: ['./selector-departamento.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorDepartamentoComponent),
    multi: true
  }]
})
export class SelectorDepartamentoComponent implements OnInit,ControlValueAccessor {

  constructor(private depart_s: EstablecimientosNacService) { }
  



  DEPARTAMENTO = '';
  onchang: any=(e:any)=>{};
  touched = false
  onTouch = () => { }


  writeValue(obj: any): void {

    this.DEPARTAMENTO = obj;
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
  departamentos_dat: any[] = []
  @Output('seleciono_departamento')
  seleciono_departamento: EventEmitter<string> = new EventEmitter<string>()


  ngOnInit(): void {
    this.cargar_departamentos()
  }
  cargar_departamentos() {
    this.depart_s.devolver_departamentos().subscribe(datos => {
      this.departamentos_dat = datos;
    }, error => {
      alert('error de coneccion')
    })
  }
  selecciono_prov(e: any) {



    this.onchang(e)

    this.seleciono_departamento.emit(e)

  }

}
