import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultisectorialService } from 'src/app/servicios/multisectorial/multisectorial.service';

@Component({
  selector: 'app-detalle-atencion-his-ninio',
  templateUrl: './detalle-atencion-his-ninio.component.html',
  styleUrls: ['./detalle-atencion-his-ninio.component.scss']
})
export class DetalleAtencionHisNinioComponent implements OnInit {

  constructor(private ROU:ActivatedRoute,private RPT:MultisectorialService) { }
  data:any[]=[]

  ngOnInit(): void {
    this.ROU.params.subscribe(data=>{
      console.log(data.NRO_DOCUMENTO)
      this.RPT.cargar_detalle_dni(data.NRO_DOCUMENTO).subscribe(respuesta=>{
        console.log(respuesta)
        this.data=respuesta
      })

    })
  }


}
