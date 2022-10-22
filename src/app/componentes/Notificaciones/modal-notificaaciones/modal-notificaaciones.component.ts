import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-notificaaciones',
  templateUrl: './modal-notificaaciones.component.html',
  styleUrls: ['./modal-notificaaciones.component.scss']
})
export class ModalNotificaacionesComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.location.back()
  }

}
