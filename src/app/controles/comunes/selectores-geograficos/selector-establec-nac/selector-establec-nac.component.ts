import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }
  cargar_establecimientos(){
    this.esta_nac.cargar_por_ubigeo(this.UBIGEO).subscribe(datos=>{
      this.Establecimientos=datos
    })
  }
  seleciono_ipress(e:any){
    
  }

}
