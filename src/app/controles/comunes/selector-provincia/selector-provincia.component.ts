import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Provincias } from 'src/app/interface/provincia-interface';
import { ProvinciaService } from 'src/app/servicios/maestros/provincia.service';

@Component({
  selector: 'app-selector-provincia',
  templateUrl: './selector-provincia.component.html',
  styleUrls: ['./selector-provincia.component.scss']
})
export class SelectorProvinciaComponent implements OnInit {

  constructor(private provincia_s: ProvinciaService) { }
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

    this.seleciono_provincia.emit(e)

  }

}
