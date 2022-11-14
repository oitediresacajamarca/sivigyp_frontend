import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EstablecimientosOneService } from 'src/app/servicios/establecimientos-on/establecimientos-one.service';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  modulo = 'GESTANTES'

  constructor(private rout: Router, private route: ActivatedRoute,public est_ser:EstablecimientosOneService, public estad: EstadoServiceService, private http: HttpClient, private autentic: AutenticacionService) { }

  ngOnInit(): void {

    this.autentic.get_profile(localStorage.getItem('TOKEN')?.toString().replace('"','')+'').subscribe(respuesta => {

      this.est_ser.cargar_estable(respuesta.origen).subscribe(fer=>{


        this.estad.ambito.ambito_origen=String(1000000000+(fer.Id)).slice(1,10)
        this.estad.ambito.nivel_ambito_origen=fer.IdNivelesEstablecimientos
        if(fer.IdNivelesEstablecimientos==5 ||fer.IdNivelesEstablecimientos==6){
          this.estad.ambito.cod_ambito=String(1000000000+(fer.Id)).slice(1,10)

          this.estad.ambito.nombre_ambito=fer.Nombre
          this.estad.ambito.nivel_ambito=fer.IdNivelesEstablecimientos
          this.estad.cambio_ambito.emit()
        }

        if(fer.IdNivelesEstablecimientos==4 ||fer.IdNivelesEstablecimientos==3||fer.IdNivelesEstablecimientos==2||fer.IdNivelesEstablecimientos==1){
          this.estad.ambito.cod_ambito=String(1000000000+(fer.Id)).slice(1,10)

          this.estad.ambito.nombre_ambito=fer.Nombre
          this.estad.ambito.nivel_ambito=fer.IdNivelesEstablecimientos
          this.estad.cambio_ambito.emit()
        }


      })

    })


    //  this.rout.navigate(['inicio'],{ relativeTo: this.route})
  }
  abrir_modulo_reporte_gestante() {
    this.modulo = 'REPORTES_GESTANTES'

    this.rout.navigate(['reporte-gestante'], { relativeTo: this.route })

  }
  cerrar_session() {


    this.rout.navigate(['../login'], { relativeTo: this.route })
  }


}
