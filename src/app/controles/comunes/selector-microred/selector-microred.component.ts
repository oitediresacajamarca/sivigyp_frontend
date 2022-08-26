import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MicroredService } from 'src/app/servicios/maestros/microred.service';

@Component({
  selector: 'app-selector-microred',
  templateUrl: './selector-microred.component.html',
  styleUrls: ['./selector-microred.component.scss']
})
export class SelectorMicroredComponent implements OnInit {

  constructor(private microred_se: MicroredService) { }
  miroredes: any[] = []

  @Output('cambio_microred')
  cambio_microred: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
  }
  cargar_microred_por_red(id_red: any) {
    this.microred_se.cargar_microred_segun_microred(id_red).subscribe(data => {
      console.log(data)
      this.miroredes = data
    })

  }
  cambio_microredf(e: any) {
    console.log('cambio')

    this.cambio_microred.emit(e)

  }

}
