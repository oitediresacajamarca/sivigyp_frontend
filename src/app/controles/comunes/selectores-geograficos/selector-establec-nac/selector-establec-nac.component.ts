import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstablecimientosNacService } from 'src/app/servicios/establecimientos-nac.service';

@Component({
  selector: 'app-selector-establec-nac',
  templateUrl: './selector-establec-nac.component.html',
  styleUrls: ['./selector-establec-nac.component.scss']
})
export class SelectorEstablecNacComponent implements OnInit {

  constructor(private esta_nac:EstablecimientosNacService) { }
  UBIGEO:string=''
  Establecimientos:any[]=[]

  @Output('selecciono_ipress')
  selecciono_ipress:EventEmitter<any>=new EventEmitter()


  ngOnInit(): void {
  }
  cargar_establecimientos(){
    this.esta_nac.cargar_por_ubigeo(this.UBIGEO).subscribe(datos=>{
      console.log(datos)
      this.Establecimientos=datos
    })
  }
  seleciono_ipress(e:any){
    console.log(e)
    this.selecciono_ipress.emit(e)
  }

}
