import { Component, OnInit } from '@angular/core';
import { PadronGestanteServiService } from 'src/app/servicios/reportes/padron-gestante-servi.service';
import { Fill, Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-reporte-gestante-padron',
  templateUrl: './reporte-gestante-padron.component.html',
  styleUrls: ['./reporte-gestante-padron.component.scss']
})
export class ReporteGestantePadronComponent implements OnInit {

  constructor(private rpt_serv: PadronGestanteServiService) { }
  ambito_ipres: string = ''

  ngOnInit(): void {
  }

  selecciono_ambito(e: any) {


    this.ambito_ipres = e

  }
  Buscar() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('PADRON DE GESTANTES');

    this.rpt_serv.cargar_padron(this.ambito_ipres).subscribe(reporte => {
      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      let encabezado = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      console.log(reporte)

      let f: Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF6550' },
        bgColor: { argb: '000000' }


      };


      let cell = encabezado.getCell(1)
      cell.value = 'RED';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(2)
      cell.value = 'MICRORED';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(3)
      cell.value = 'RENIPRESS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(4)
      cell.value = 'IPRESS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(5)
      cell.value = 'FECHA ATENCION';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(6)
      cell.value = 'NUMERO DOCUMENTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(7)
      cell.value = 'APELLIDO PATERNO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(8)
      cell.value = 'APELLIDO MATERNO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(9)
      cell.value = 'NOMBRES';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      let col = sheet.getColumn(1)
      col.width = 20

      col = sheet.getColumn(2)
      col.width = 20

      col = sheet.getColumn(3)
      col.width = 20
      col = sheet.getColumn(4)
      col.width = 20
      col = sheet.getColumn(5)
      col.width = 20
      col = sheet.getColumn(6)
      col.width = 20
      col = sheet.getColumn(7)
      col.width = 20
      col = sheet.getColumn(8)
      col.width = 20
      col = sheet.getColumn(9)
      col.width = 20
      col = sheet.getColumn(10)
      col.width = 20

      let row_it

      reporte.map(registro => {

        row_it = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
        cell = row_it.getCell(1)
        cell.value = registro.RED

        cell = row_it.getCell(2)
        cell.value = registro.MICRORED

        cell = row_it.getCell(3)
        cell.value = registro.RENIPRESS


        cell = row_it.getCell(4)
        cell.value = registro.IPRESS

        cell = row_it.getCell(5)
        cell.value = registro.FECHA_ATENCION

        cell = row_it.getCell(6)
        cell.value = registro.NUMERO_DOCUMENTO

        cell = row_it.getCell(7)
        cell.value = registro.APELLIDO_PATERNO

        cell = row_it.getCell(8)
        cell.value = registro.APELLIDO_MATERNO

        cell = row_it.getCell(10)
        cell.value = registro.NOMBRES


      })

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        fs.saveAs(blob, 'REPORTE PADRON GESTANTE' + '.xlsx');
      });



    })

  }

}
