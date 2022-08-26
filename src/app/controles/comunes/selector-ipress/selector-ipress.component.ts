import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IpressService } from 'src/app/servicios/maestros/ipress.service';

@Component({
  selector: 'app-selector-ipress',
  templateUrl: './selector-ipress.component.html',
  styleUrls: ['./selector-ipress.component.scss']
})
export class SelectorIpressComponent implements OnInit {

  constructor(private ipres_s: IpressService) { }

  ipress:any[] = []

  ngOnInit(): void {
  }
  cargar_ipress_por_microred(id_microred: any) {
    this.ipres_s.cargar_ipress_microred(id_microred).subscribe(data => {
      console.log(data)
      this.ipress = data
    })

  }

}
