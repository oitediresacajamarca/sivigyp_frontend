import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  modulo='GESTANTES'

  constructor(private rout:Router,private route: ActivatedRoute,public estad:EstadoServiceService) { }

  ngOnInit(): void {
    this.estad.alerta
    console.log(this.route)

    this.rout.navigate(['inicio'],{ relativeTo: this.route})
  }
  abrir_modulo_reporte_gestante(){
    this.modulo='REPORTES_GESTANTES'

    this.rout.navigate(['reporte-gestante'],{ relativeTo: this.route})

  }
  cerrar_session(){


    this.rout.navigate(['../login'],{ relativeTo: this.route})
  }


}
