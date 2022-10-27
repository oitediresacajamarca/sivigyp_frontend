import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MultisectorialService } from 'src/app/servicios/multisectorial/multisectorial.service';
import { hecho_multisectorial } from 'src/app/servicios/multisectorial/multisectorial/interface';

@Component({
  selector: 'app-seguimiento-ninio',
  templateUrl: './seguimiento-ninio.component.html',
  styleUrls: ['./seguimiento-ninio.component.scss']
})
export class SeguimientoNinioComponent implements OnInit {

  constructor( private multi: MultisectorialService) { }
  ambito=''
  indicador=''
  ANIO=0;
  MES=0
  NRO_DOCUMENTO=''
  filtro={}
  data:hecho_multisectorial[]=[]

  ngOnInit(): void {
  }
  selecciono_ambito(e:any){
    console.log(e)
    this.ambito=e
  }
  selecciono_indicador(e:any){
    this.indicador=e

  }
  BUSCAR(){
    console.log(this.ambito)
    this.filtro={ambito:this.ambito,indicador: this.indicador,anio:this.ANIO,mes:this.MES,nro_documento:this.NRO_DOCUMENTO}

    this.multi.cargar_detalle_fil(this.filtro).subscribe(respuesta=>{
      console.log(respuesta)
      this.data=respuesta
    })
  }

  selecciono_anio(valor :any){
     console.log(valor)
     this.ANIO=valor
  }

  selecciono_mes(valor:any){
    this.MES=valor
  }

  cambio_nro_documento(valor:any)
  {
    this.NRO_DOCUMENTO=valor
  }

}
