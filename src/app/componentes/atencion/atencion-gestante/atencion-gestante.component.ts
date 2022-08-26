import { Component, OnInit } from '@angular/core';
import { DataGestanteInterface } from 'src/app/interface/data-gestante-interface';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';

@Component({
  selector: 'app-atencion-gestante',
  templateUrl: './atencion-gestante.component.html',
  styleUrls: ['./atencion-gestante.component.scss']
})
export class AtencionGestanteComponent implements OnInit {

  constructor(private estados:EstadoServiceService) { }

  gestante:DataGestanteInterface=this.estados.paciente
  

  ngOnInit(): void {

  }

}
