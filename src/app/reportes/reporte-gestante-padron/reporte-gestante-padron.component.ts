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
      cell.value = 'PROVINCIA';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(3)
      cell.value = 'DISTRITO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(4)
      cell.value = 'CENTRO POBLADO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(5)
      cell.value = 'IPRESS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(6)
      cell.value = 'RENIPRESS';
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

      cell = encabezado.getCell(10)
      cell.value = 'NOMBRES';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(11)
      cell.value = 'FECHA NACIMIENTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(12)
      cell.value = 'EDAD';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(13)
      cell.value = 'ESTADO CIVIL';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(14)
      cell.value = 'DIRECCION';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(15)
      cell.value = 'TIPO SEGURO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(16)
      cell.value = 'NIVEL DE INSTRUCCCION';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(17)
      cell.value = 'BENEFICIARIO JUNTOS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(18)
      cell.value = 'IDIOMA';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(19)
      cell.value = 'FECHA ULTIMA REGLA';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(20)
      cell.value = 'FECHA REGISTRO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(21)
      cell.value = 'FECHA PRIMERA APP';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(22)
      cell.value = 'FECHA PRIMERA APP';
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


      col = sheet.getColumn(11)
      col.width = 20
      col = sheet.getColumn(12)
      col.width = 20
      col = sheet.getColumn(13)
      col.width = 20


      col = sheet.getColumn(14)
      col.width = 20
      col = sheet.getColumn(15)
      col.width = 20
      col = sheet.getColumn(16)
      col.width = 20


      col = sheet.getColumn(17)
      col.width = 20
      col = sheet.getColumn(18)
      col.width = 20
      col = sheet.getColumn(19)
      col.width = 20

      col = sheet.getColumn(20)
      col.width = 20

      let row_it

      reporte.map(registro => {

        row_it = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
        cell = row_it.getCell(1)
        cell.value = registro.RED

        cell = row_it.getCell(2)
        cell.value = registro.PROVINCIA

        cell = row_it.getCell(3)
        cell.value = registro.DISTRITO


        cell = row_it.getCell(4)
        cell.value = registro.CP

        cell = row_it.getCell(5)
        cell.value = registro.IPRESS

        cell = row_it.getCell(6)
        cell.value = registro.COD_IPRESS

        cell = row_it.getCell(7)
        cell.value = registro.APELLIDO_PATERNO

        cell = row_it.getCell(9)
        cell.value = registro.APELLIDO_MATERNO

        cell = row_it.getCell(10)
        cell.value = registro.NOMBRES

        cell = row_it.getCell(11)
        cell.value = registro.FECHA_NAC

        cell = row_it.getCell(12)
        cell.value = registro.EDAD


        cell = row_it.getCell(13)
        cell.value = registro.ESTADO_CIVIL

        cell = row_it.getCell(14)
        cell.value = registro.TIPO_SEGURO

        cell = row_it.getCell(15)
        cell.value = registro.NRO_DOCUMENTO

        cell = row_it.getCell(16)
        cell.value = registro.ESTADO_CIVIL

        cell = row_it.getCell(17)
        cell.value = registro.DIRECCION

        cell = row_it.getCell(18)
        cell.value = registro.TIPO_SEGURO

        cell = row_it.getCell(19)
        cell.value = registro.GRADO_INSTRUCION

        cell = row_it.getCell(20)
        cell.value = registro.NOMBRES

        cell = row_it.getCell(21)
        cell.value = registro.NOMBRES

        cell = row_it.getCell(22)
        cell.value = registro.FUR_ATENCION

        cell = row_it.getCell(23)
        cell.value = registro.FECHA_POSIBLE_PARTO

        cell = row_it.getCell(24)
        cell.value = registro.FEC_REGISTRO

        cell = row_it.getCell(25)
        cell.value = registro.FECHA_PAP

        cell = row_it.getCell(26)
        cell.value = registro.NRO_GESTACIONES

        cell = row_it.getCell(27)
        cell.value = registro.HIJOS_VIVOS

        cell = row_it.getCell(28)
        cell.value = registro.RIESGOS


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
