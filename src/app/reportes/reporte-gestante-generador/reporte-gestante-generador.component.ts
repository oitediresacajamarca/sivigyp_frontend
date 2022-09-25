import { Component, OnInit } from '@angular/core';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';
import { Fill, Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-reporte-gestante-generador',
  templateUrl: './reporte-gestante-generador.component.html',
  styleUrls: ['./reporte-gestante-generador.component.scss']
})
export class ReporteGestanteGeneradorComponent implements OnInit {

  constructor(private atencion_serv: AtencionRegService) { }
  ambito: string = ''
  desde!: Date
  hasta!: Date

  ngOnInit(): void {
  }

  Buscar() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('My Sheet');



    this.atencion_serv.reporte_gestante(this.ambito, { desde: this.desde, hasta: this.hasta }).subscribe(respuesta => {
      let encabezado = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })

      let f: Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'fc4b6c' },



      };
      let cell = encabezado.getCell(1)
      cell.value = 'DEPARTAMENTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };
      cell = encabezado.getCell(2)
      cell.value = 'RED'
      cell.fill = f

      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };
      cell = encabezado.getCell(3)
      cell.value = 'MICRORED'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };
      cell = encabezado.getCell(4)
      cell.value = 'PROVINCIA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };
      cell = encabezado.getCell(5)
      cell.value = 'DISTRITO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(6)
      cell.value = 'UBIGEO DISTRITO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(7)
      cell.value = 'CENTRO POBLADO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };


      cell = encabezado.getCell(8)
      cell.value = 'CODIGO CENTRO POBLADO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(10)
      cell.value = 'NOMBRES'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(11)
      cell.value = 'APELLIDO PATERNO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(12)
      cell.value = 'APELLIDO MATERNO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(13)
      cell.value = 'FECHA NACIMIENTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(15)
      cell.value = 'NUMERO DOCUMENTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };


      cell = encabezado.getCell(17)
      cell.value = 'ATENCIONES'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      cell = encabezado.getCell(18)
      cell.value = 'EDAD GESTACIONAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 14};
      cell.alignment = {horizontal: 'center' };

      let border:any={
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      };

   let col=   sheet.getColumn(1)
   col.width=20
   col.border=border
   col=   sheet.getColumn(2)
   col.width=20
   col.border=border
   col=   sheet.getColumn(3)
   col.width=20
   col=   sheet.getColumn(4)
   col.width=20
   col=   sheet.getColumn(5)
   col.width=20
   col=   sheet.getColumn(6)
   col.width=20
   col=   sheet.getColumn(7)
   col.width=20
   col=   sheet.getColumn(8)
   col.width=20
   col=   sheet.getColumn(9)
   col.width=20
   col=   sheet.getColumn(10)
   col.width=20
   col=   sheet.getColumn(11)
   col.width=20
   col=   sheet.getColumn(12)
   col.width=20
   col=   sheet.getColumn(13)
   col.width=20
   col=   sheet.getColumn(14)
   col.width=20
   col=   sheet.getColumn(15)
   col.width=20
   col=   sheet.getColumn(16)
   col.width=20



      let row_it

      respuesta.forEach(registro => {
        row_it = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
        cell = row_it.getCell(1)
        cell.value = 'CAJAMARCA'
        cell = row_it.getCell(2)
        cell.value = registro.ATENCION.HistoriaClinica.IPRESS.MICRORED.RED.NOMBRE

        cell = row_it.getCell(3)
        cell.value = registro.ATENCION.HistoriaClinica.IPRESS.MICRORED.NOMBRE


        cell = row_it.getCell(4)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.DISTRITO.PROVINCIA.NOMBRE

        cell = row_it.getCell(5)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.DISTRITO.NOMBRE

        cell = row_it.getCell(6)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.DISTRITO.ID_DISTRITO
        cell = row_it.getCell(7)
        cell.value = registro.ATENCION.HistoriaClinica.CENTRO_POBLADO.NOMBRE

        cell = row_it.getCell(8)
        cell.value = registro.ATENCION.HistoriaClinica.ID_CENTRO_POBLADO


        cell = row_it.getCell(10)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.NOMBRES

        cell = row_it.getCell(11)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.APELLIDO_PAT

        cell = row_it.getCell(12)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.APELLIDO_MAT

        cell = row_it.getCell(13)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.FECHA_NAC


        cell = row_it.getCell(15)
        cell.value = registro.ATENCION.HistoriaClinica.PERSONA.NRO_DOCUMENTO


        cell = row_it.getCell(17)
        cell.value = registro.FECHA_ATENCION_REG

        cell = row_it.getCell(18)
        cell.value = registro.EDAD_GESTACIONAL










      })
      console.log(respuesta)

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        fs.saveAs(blob, 'REPORTE GESTANTE' + '.xlsx');
      });

    })

  }
  selecciono_ambito(e: any) {

    this.ambito = e

  }
  selecciono_rango(e: any) {

    this.desde = e.desde
    this.hasta = e.hasta

  }


}
