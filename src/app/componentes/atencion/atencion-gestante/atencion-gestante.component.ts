import { Component, OnInit } from '@angular/core';
import { DataGestanteInterface } from 'src/app/interface/data-gestante-interface';
import { TipoSeguro } from 'src/app/interface/tipo-seguro';
import { EstadoServiceService } from 'src/app/servicios/estado-service.service';
import { TipoSeguroService } from 'src/app/servicios/maestros/tipo-seguro.service';

@Component({
  selector: 'app-atencion-gestante',
  templateUrl: './atencion-gestante.component.html',
  styleUrls: ['./atencion-gestante.component.scss']
})
export class AtencionGestanteComponent implements OnInit {

  constructor(private estados: EstadoServiceService, private segurs: TipoSeguroService) { }

  gestante: DataGestanteInterface = this.estados.paciente
  seguro!: TipoSeguro|undefined



  ngOnInit(): void {
  this.completar_data()



  }
  completar_data() {
    this.agregar_seguro()


  }
  agregar_seguro() {
    this.seguro = this.segurs.devolver_seguro(this.gestante.TIPO_SEGURO)

  }

}
