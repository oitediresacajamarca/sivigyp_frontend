import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstablecimientosNacService } from 'src/app/servicios/establecimientos-nac.service';

@Component({
  selector: 'app-selector-provincia-nac',
  templateUrl: './selector-provincia.component.html',
  styleUrls: ['./selector-provincia.component.scss']
})
export class SelectorProvinciaNacComponent implements OnInit {

  provincia = '';
  cod_dep=''
  onchang: any=(e:any)=>{};
  touched = false
  onTouch = () => { }

  constructor(private provincia_s: EstablecimientosNacService) { }
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
  provincias_dat: any[] = []
  @Output('selecciono_provincia')
  selecciono_provincia: EventEmitter<string> = new EventEmitter<string>()


  ngOnInit(): void {
    this.cargar_provincias()
  }
  cargar_provincias() {
    this.provincia_s.devolver_provincias(this.cod_dep).subscribe(datos => {
      this.provincias_dat = datos;
    }, error => {
      alert('error de coneccion')
    })
  }
  selecciono_prov(e: any) {



    this.onchang(e)

    this.selecciono_provincia.emit(e)

  }
}
