import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  modulo='GESTANTES'

  constructor(private rout:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  abrir_modulo_reporte_gestante(){
    this.modulo='REPORTES_GESTANTES'

    this.rout.navigate(['reporte-gestante'],{ relativeTo: this.route})

  }

}
