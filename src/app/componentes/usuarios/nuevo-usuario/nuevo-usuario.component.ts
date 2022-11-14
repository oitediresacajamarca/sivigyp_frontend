import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectorIpressComponent } from 'src/app/controles/comunes/selector-ipress/selector-ipress.component';
import { SelectorMicroredComponent } from 'src/app/controles/comunes/selector-microred/selector-microred.component';

import { PersonaService } from 'src/app/servicios/persona.service';



@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private person_s: PersonaService, private http: HttpClient, private fb: FormBuilder) { }

  dni_ingresado: string = '';
  nuevo_usuario!: FormGroup
  nuevo_usuario_ambito!:FormGroup
  @ViewChild('selector_microred')
  selector_microred!: SelectorMicroredComponent

  @ViewChild('selector_ipress')
  selector_ipress!: SelectorIpressComponent

  ngOnInit(): void {
    this.nuevo_usuario = this.fb.group({ nro_documento: '', apellido_pat: '', apellido_mat: '', nombres: '', red: '' })
    this.nuevo_usuario_ambito = this.fb.group({ red: '' })

  }
  cargar_datos_persona_por_dni() {

    this.person_s.buscar_persona(this.nuevo_usuario.value.nro_documento).subscribe(respuesta => {

      this.nuevo_usuario.setValue({ ...this.nuevo_usuario.value, ...respuesta })

    }, error => { alert('no se encuentra el dni') })

  }

  onSubmit(from: any) {


  }
  cambio_red(e: any) {

    this.selector_microred.cargar_microred_por_red(e)
  }
  cambio_microred(e: any) {

    this.selector_ipress.cargar_ipress_por_microred(e)

  }
  Guardar() {

  }


}
