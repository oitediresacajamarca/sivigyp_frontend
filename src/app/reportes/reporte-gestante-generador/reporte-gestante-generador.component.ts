import { Component, OnInit } from '@angular/core';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';
import { Fill, Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { SeguimientoSiviService } from 'src/app/servicios/reportes/seguimiento/seguimiento-sivi.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reporte-gestante-generador',
  templateUrl: './reporte-gestante-generador.component.html',
  styleUrls: ['./reporte-gestante-generador.component.scss']
})
export class ReporteGestanteGeneradorComponent implements OnInit {

  constructor(private atencion_serv: AtencionRegService, private repseg: SeguimientoSiviService) { }
  ambito: string = ''
  desde!: Date
  hasta!: Date

  ngOnInit(): void {
  }

  Buscar() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('My Sheet');



    this.repseg.cargar_seguimiento_2(this.ambito).subscribe(respuesta => {

      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })

      let encabezado = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })

      let f: Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'fc4b6c' },
        bgColor: { argb: '000000' }



      };

      let cell = encabezado.getCell(1)
      cell.value = 'RED'
      cell.fill = f

      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
      cell = encabezado.getCell(2)
      cell.value = 'PROVINCIA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
      cell = encabezado.getCell(3)
      cell.value = 'DISTRITO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
      cell = encabezado.getCell(4)
      cell.value = 'CENTRO POBLADO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(5)
      cell.value = 'NOMBRE DE LA IPRESS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(6)
      cell.value = 'RENIPRESS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(7)
      cell.value = 'APELLIDO PATERNO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(8)
      cell.value = 'APELLLIDO MATERNO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(9)
      cell.value = 'PRIMER NOMBRE'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(10)
      cell.value = 'SEGUNDO NOMBRE'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(11)
      cell.value = 'FECHA NACIMIENTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(12)
      cell.value = 'EDAD'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(13)
      cell.value = 'ESTADO CIVIL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(14)
      cell.value = 'TIPO DE IDENTIDAD'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(15)
      cell.value = 'NUMERO DOCUMENTO IDENTIDAD'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(16)
      cell.value = 'ESTADO CIVIL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(17)
      cell.value = 'DIRECCION HABITUAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(18)
      cell.value = 'TIPO DE SEGURO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(19)
      cell.value = 'NIVEL DE INSTRUCCION'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(20)
      cell.value = 'BENEFICIARIA JUNTOS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(21)
      cell.value = 'IDIOMA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(22)
      cell.value = 'RELIGION'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(23)
      cell.value = 'TELEFONO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(24)
      cell.value = 'FORMULA ESTETICA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(25)
      cell.value = 'FECHA DE ULTIM REGLA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(26)
      cell.value = 'FECHA PROBABLE DE PAARTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(27)
      cell.value = 'FECHA DE REGISTRO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(28)
      cell.value = 'FECHA DE PRIMER CONTROL PRENATAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(29)
      cell.value = 'EDAD GESTACIONAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(30)
      cell.value = 'LISTA DE RIESGOS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(31)
      cell.value = 'GRUPO SANGUINEO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(32)
      cell.value = 'FACTOR SANGUINEO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };




      for (let i = 33; i <= 42 + 33 - 5; i++) {
        cell = encabezado.getCell(i)
        cell.value = 'Sem ' + (5 + (i - 33))
        cell.fill = f
        cell.font = { name: 'Arial', size: 12 };
        cell.alignment = { horizontal: 'center' };
      }


      cell = encabezado.getCell(32+42+1)
      cell.value = 'FFCHA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(32+42+2)
      cell.value = 'TIPO PARTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(32+42+3)
      cell.value = 'LUGAR PARTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(32+42+4)
      cell.value = 'QUIEN ATENDIO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(32+42+5)
      cell.value = 'TIPO RECIEN NACIDO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(32+42+6)
      cell.value = 'PESO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(32+42+7)
      cell.value = 'SEXO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(32+42+8)
      cell.value = 'PRIMER CONTROL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(32+42+9)
      cell.value = 'SEGUNDO CONTROL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };





      let border: any = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };

      let col = sheet.getColumn(1)
      col.width = 20
      col.border = border
      col = sheet.getColumn(2)
      col.width = 20
      col.border = border
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



      let row_it




      respuesta.forEach(registro => {
        let fila = sheet.addRow({})

        let cell = fila.getCell(1)
        cell.value = registro.HistoriaClinica?.IPRESS?.MICRORED?.RED?.NOMBRE + ''
        cell = fila.getCell(2)
        cell.value = registro.HistoriaClinica?.PERSONA?.DISTRITO?.PROVINCIA?.NOMBRE + ''
        let j: number
        cell = fila.getCell(3)
        cell.value = registro.HistoriaClinica?.PERSONA?.DISTRITO?.NOMBRE + ''
        cell = fila.getCell(4)

        cell.value = registro.HistoriaClinica?.CENTRO_POBLADO?.NOMBRE + ''
        j = 4
        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.IPRESS?.NOMBRE + ''
        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.IPRESS?.COD_IPRESS + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.APELLIDO_PAT + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.APELLIDO_MAT + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.NOMBRES + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = ''


        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.FECHA_NAC + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = ''


        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.ESTADO_CIVIL + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.ID_TIPOD + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.NRO_DOCUMENTO + ''
        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.ESTADO_CIVIL + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.DIRECCION + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.TIPO_SEGURO + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.ID_GRADO_INSTRUCCION + ''


        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.BENEFICIARIA_JUNTOS + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.IDIOMA + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.RELIGION + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.TELEFONO + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.FUR_ATENCION + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.FECHA_POSIBLE_PARTO + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.FECHA_ATENCION_PRENATAL + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.FECHA_ATENCION_PRENATAL + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = ''


        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.GRUPO_SANGUINEO + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.FACTOR_SANGUINEO + ''


        j = j + 1

        registro.ATENCIONES_SEMANALES?.forEach(SEM => {


          cell = fila.getCell(j + SEM.NUMERO_SEMANA! - 4)
          if (SEM.FECHA_ATENCION_REG + '' != 'null') {

            cell.value = moment(SEM.FECHA_ATENCION_REG).format('DD-MM-yyyy')
          }


        })

        j = j + 42

        if (registro.PARTOS.length > 0) {
          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].TIPO_PARTO + ''
        }


        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].LUGAR_PARTO + ''

        }

        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].ID_ATENDIO_PARTO + ''

        }

        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].RN_PESO + ''

        }

        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].RN_SEXO + ''

        }































      })


      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        fs.saveAs(blob, 'REPORTE GESTANTE' + '.xlsx');
      });

    })

  }
  selecciono_ambito(e: any) {

    console.log(e)

    this.ambito = e

  }
  selecciono_rango(e: any) {

    this.desde = e.desde
    this.hasta = e.hasta

  }


}
