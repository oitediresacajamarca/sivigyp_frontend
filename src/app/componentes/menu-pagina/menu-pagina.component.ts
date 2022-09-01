import { Component, OnInit } from '@angular/core';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

@Component({
  selector: 'app-menu-pagina',
  templateUrl: './menu-pagina.component.html',
  styleUrls: ['./menu-pagina.component.scss']
})
export class MenuPaginaComponent implements OnInit {

  constructor(private estado_s:EstadoServiceService) { }
  Ipress_Atencion=''
  Renipress_Atencion=''

  ngOnInit(): void {
    this.Cargar_Ipress_Atencion()
  }
  Cargar_Ipress_Atencion(){
  let dat:any=  this.estado_s.devolver_ambito_actual()
  this.Ipress_Atencion=dat.nombre_ambito
  this.Renipress_Atencion=dat.cod_ambito


  }

}
