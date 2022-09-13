import { Component, Input, OnInit } from '@angular/core';
import { AtencionReg } from 'src/app/interface/atencion-reg';

@Component({
  selector: 'app-programacion-citas',
  templateUrl: './programacion-citas.component.html',
  styleUrls: ['./programacion-citas.component.scss']
})
export class ProgramacionCitasComponent implements OnInit {

  constructor() { }

  @Input('atenciones_reg')
  atenciones_reg:AtencionReg[]=[]

  ngOnInit(): void {
  }

}
