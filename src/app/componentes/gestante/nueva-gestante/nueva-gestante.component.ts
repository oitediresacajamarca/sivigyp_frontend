import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectorCentroPobladoComponent } from 'src/app/controles/comunes/selector-centro-poblado/selector-centro-poblado.component';
import { SelectorDistritoComponent } from 'src/app/controles/comunes/selector-distrito/selector-distrito.component';
import { MstPacienteService } from 'src/app/servicios/risc/mst-paciente.service';
var moment = require('moment');

@Component({
  selector: 'app-nueva-gestante',
  templateUrl: './nueva-gestante.component.html',
  styleUrls: ['./nueva-gestante.component.scss']
})
export class NuevaGestanteComponent implements OnInit {

  constructor(private mst_per: MstPacienteService, private fb: FormBuilder) { }

  nro_documento = '41935041'
  datos_generales!: FormGroup


  @ViewChild('selector_distrito')
  selector_distrito!: SelectorDistritoComponent

  @ViewChild('selector_centro_poblado')
  selector_centro_poblado!: SelectorCentroPobladoComponent



  selecciono_provincia(e: any) {

    this.selector_distrito.cargar_distrito_por_provincia(e)
  }

  selecciono_distrito(e: any) {
    this.selector_centro_poblado.cargar_centro_poblador_por_distrito(e)
  }

  Buscar_Persona() {


    this.mst_per.devolver_mst_paciente(this.datos_generales.value.nro_documento).subscribe(per => {



      this.datos_generales.patchValue(per)


    })

  }

  ngOnInit(): void {

    this.datos_generales = this.fb.group({ 'nro_documento': '' ,'nombres':'',
    'apellido_paterno':'',
    'apellido_materno':'',
    'fecha_nacimiento':''

  })
  }
  mensaje = false

}
