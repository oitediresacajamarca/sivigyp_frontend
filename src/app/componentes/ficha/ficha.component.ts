import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  constructor(private fb: FormBuilder,private http:HttpClient) { }
  fromG!:FormGroup

  ngOnInit(): void {
  this.fromG=  this.fb.group({ NOMBRE_FICHA: '', DESCRIPCION_FICHA: '', FORMULA_FICHA: '', RESPONSABLE_FICHA: '', FRECUENCIA_MEDICION: '', TIPO_INDICADOR: '', VIGENCIA: '', UNIDAD: '', ID_INDICADOR: '', OBSERVACIONES_FICHA: '', NUMERADOR: '', DENOMINADOR: '' })
  }
  enviar() {
    console.log(this.fromG.value)
    this.http.post("http://localhost:8006/api/ficha-cmi",this.fromG.value).subscribe(respuesta=>{
      console.log(respuesta)
    })



  }


}
