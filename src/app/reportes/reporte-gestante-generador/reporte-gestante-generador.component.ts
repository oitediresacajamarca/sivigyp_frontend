import { Component, OnInit } from '@angular/core';
import { AtencionRegService } from 'src/app/servicios/atencion-reg/atencion-reg.service';
import { Fill, Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { SeguimientoSiviService } from 'src/app/servicios/reportes/seguimiento/seguimiento-sivi.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reporte-gestante-generador',
  templateUrl: './reporte-gestante-generador.component.html',
  styleUrls: ['./reporte-gestante-generador.component.scss']
})
export class ReporteGestanteGeneradorComponent implements OnInit {

  constructor(private atencion_serv: AtencionRegService, private repseg: SeguimientoSiviService, private spinner: NgxSpinnerService) { }
  ambito: string = ''
  desde!: Date
  hasta!: Date

  ngOnInit(): void {
  }

  Buscar() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('Reporte Seguimiento');

    this.spinner.show()

    this.repseg.cargar_seguimiento_2(this.ambito).subscribe(respuesta => {


      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })

      let encabezado = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })

      let f: Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'cccccc' }



      };

      let cell = encabezado.getCell(1)
      cell.value = 'RED'
      cell.fill = f

      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
       cell = encabezado.getCell(2)
      cell.value = 'MICRORED'
      cell.fill = f

      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
      cell = encabezado.getCell(3)
      cell.value = 'PROVINCIA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
      cell = encabezado.getCell(4)
      cell.value = 'DISTRITO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
      cell = encabezado.getCell(5)
      cell.value = 'CENTRO POBLADO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(6)
      cell.value = 'NOMBRE DE LA IPRESS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(7)
      cell.value = 'RENIPRESS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(8)
      cell.value = 'APELLIDO PATERNO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(9)
      cell.value = 'APELLLIDO MATERNO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(10)
      cell.value = 'PRIMER NOMBRE'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(11)
      cell.value = 'SEGUNDO NOMBRE'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(12)
      cell.value = 'FECHA NACIMIENTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(13)
      cell.value = 'EDAD'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(14)
      cell.value = 'ESTADO CIVIL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(15)
      cell.value = 'TIPO DE IDENTIDAD'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(16)
      cell.value = 'NUMERO DOCUMENTO IDENTIDAD'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(17)
      cell.value = 'ESTADO CIVIL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(18)
      cell.value = 'DIRECCION HABITUAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(19)
      cell.value = 'TIPO DE SEGURO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(20)
      cell.value = 'NIVEL DE INSTRUCCION'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(21)
      cell.value = 'BENEFICIARIA JUNTOS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(22)
      cell.value = 'IDIOMA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(23)
      cell.value = 'RELIGION'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(24)
      cell.value = 'TELEFONO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(25)
      cell.value = 'FORMULA OBSTETRICA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(26)
      cell.value = 'FECHA DE ULTIM REGLA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(27)
      cell.value = 'FECHA PROBABLE DE PARTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(28)
      cell.value = 'FECHA DE REGISTRO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(29)
      cell.value = 'FECHA DE PRIMER CONTROL PRENATAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(30)
      cell.value = 'EDAD GESTACIONAL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(31)
      cell.value = 'LISTA DE RIESGOS'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(32)
      cell.value = 'GRUPO SANGUINEO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(33)
      cell.value = 'FACTOR SANGUINEO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };




      for (let i = 34; i <= 42 + 34 - 5; i++) {
        cell = encabezado.getCell(i)
        cell.value = 'Sem ' + (5 + (i - 34))
        cell.fill = f
        cell.font = { name: 'Arial', size: 12 };
        cell.alignment = { horizontal: 'center' };
      }


      cell = encabezado.getCell(73)
      cell.value = 'FFCHA'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(74)
      cell.value = 'TIPO PARTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(75)
      cell.value = 'LUGAR PARTO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(76)
      cell.value = 'QUIEN ATENDIO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(77)
      cell.value = 'TIPO RECIEN NACIDO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(78)
      cell.value = 'PESO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(79)
      cell.value = 'SEXO'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      cell = encabezado.getCell(80)
      cell.value = 'PRIMER CONTROL'
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      cell = encabezado.getCell(81)
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
      // col.border = border
      for (let l = 1; l <= 90; l++) {
        col = sheet.getColumn(l)
        col.width = 22
      }

      //  col.border = border




      let row_it




      respuesta.forEach(registro => {
        let fila = sheet.addRow({})

        let cell = fila.getCell(1)
        cell.value = registro.HistoriaClinica?.IPRESS?.MICRORED?.RED?.NOMBRE + ''
        cell = fila.getCell(2)
        cell.value = registro.HistoriaClinica?.IPRESS?.MICRORED?.NOMBRE + ''
        cell = fila.getCell(3)
        cell.value = registro.HistoriaClinica?.PERSONA?.DISTRITO?.PROVINCIA?.NOMBRE + ''
        let j: number
        cell = fila.getCell(4)
        cell.value = registro.HistoriaClinica?.PERSONA?.DISTRITO?.NOMBRE + ''
        cell = fila.getCell(5)

        cell.value = registro.HistoriaClinica?.CENTRO_POBLADO?.NOMBRE + ''
        j = 5
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

        cell.value = moment(registro.HistoriaClinica?.PERSONA?.FECHA_NAC).format('DD/MM/yyyy')

        j = j + 1
        cell = fila.getCell(j)
        cell.value = moment().diff(registro.HistoriaClinica?.PERSONA?.FECHA_NAC, 'year')


        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.ESTADO_CIVIL_DESCRIPCION.NOMBRE + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.ID_TIPOD + ''
        if (registro.HistoriaClinica?.PERSONA?.ID_TIPOD == 1) {
          cell.value = 'DNI'
        }
        if (registro.HistoriaClinica?.PERSONA?.ID_TIPOD == 2) {
          cell.value = 'PASAPORTE'
        }

        if (registro.HistoriaClinica?.PERSONA?.ID_TIPOD == 3) {
          cell.value = 'CÉDULA'
        }
        if (registro.HistoriaClinica?.PERSONA?.ID_TIPOD == 4) {
          cell.value = 'CARNET DE EXTRANJERÍA'
        }
        if (registro.HistoriaClinica?.PERSONA?.ID_TIPOD == 5) {
          cell.value = 'SIN DNI'
        }
        if (registro.HistoriaClinica?.PERSONA?.ID_TIPOD == 6) {
          cell.value = 'C.U.I.'
        }




        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.NRO_DOCUMENTO + ''
        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.ESTADO_CIVIL_DESCRIPCION.NOMBRE + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.PERSONA?.DIRECCION + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.TIPO_SEGURO_DESCRIPCION.ABRV + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.GRADO_INSTRUCCION_DESCRIPCION.NOMBRE + ''


        j = j + 1
        cell = fila.getCell(j)
        if (registro.HistoriaClinica?.BENEFICIARIA_JUNTOS == 0) {
          cell.value = 'NO'
        }
        if (registro.HistoriaClinica?.BENEFICIARIA_JUNTOS == 1) {
          cell.value = 'SI'
        }
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
        cell.value = 'G' + registro.NRO_GESTACIONES + ' ' + 'P' + registro.RECIEN_NACIDOS_TERMINO + registro.RECIEN_NACIDOS_PREMATUROS + registro.NUMERO_ABORTOS + registro.HIJOS_VIVOS

        j = j + 1
        cell = fila.getCell(j)
        cell.value = moment(registro.FUR_ATENCION).format('DD/MM/yyyy') + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = moment(registro.FECHA_POSIBLE_PARTO).format('DD/MM/yyyy') + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = moment(registro.FEC_REGISTRO).format('DD/MM/yyyy') + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = moment(registro.FECHA_ATENCION_PRENATAL).format('DD/MM/yyyy') + ''
        if (registro?.FECHA_ATENCION_PRENATAL + '' == 'null' || registro.FECHA_ATENCION_PRENATAL == undefined) {
          cell.value = 'NO EXISTE EN HIS'
        }

        j = j + 1
        cell = fila.getCell(j)
        cell.value = moment(registro.FECHA_ATENCION_PRENATAL).diff(registro.FUR_ATENCION, 'weeks') + ''
        if (registro?.FECHA_ATENCION_PRENATAL + '' == 'null' || registro.FECHA_ATENCION_PRENATAL == undefined) {
          cell.value = 'NO EXISTE EN HIS'
        }

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.RIESGOS?.map(riesgo => { return riesgo.NOMBRE }).join('|') + ''





        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.GRUPO_SANGUINEO + ''

        j = j + 1
        cell = fila.getCell(j)
        cell.value = registro.HistoriaClinica?.FACTOR_SANGUINEO + ''


        j = j + 1

        registro.ATENCIONES_SEMANALES?.forEach(SEM => {
          cell = fila.getCell(j + SEM.NUMERO_SEMANA! - 5)
          if (SEM.FECHA_ATENCION_REG + '' != 'null' && SEM.NUMERO_SEMANA >= 5) {
            console.log((SEM.FECHA_ATENCION_REG+'').split('|')[0])
            if(moment((SEM.FECHA_ATENCION_REG+'').split('|')[0]).format('yyyyMM')<=moment().format('yyyyMM')){
              cell.value = SEM.FECHA_ATENCION_REG + ''
            }    
          }
        })
        j = 73
        if (registro.PARTOS.length > 0) {
          cell = fila.getCell(j)
          cell.value = moment(registro.PARTOS[0].FECHA_PARTO).format('DD/MM/yyyy')
        }

        j = 74
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].TIPO_PARTO + ''
          if (registro.PARTOS[0].TIPO_PARTO == 1) {
            cell.value = 'VAGINAL'
          }
          if (registro.PARTOS[0].TIPO_PARTO == 2) {
            cell.value = 'CESAREA'
          }
          if (registro.PARTOS[0].TIPO_PARTO == 3) {
            cell.value = 'ABORTO'
          }

        }


        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)
          cell.value = registro.PARTOS[0].LUGAR_PARTO + ''

        }

        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)

          cell.value = registro.PARTOS[0].TIPO_ATENCION_PARTO?.NOMBRE_TIPO_ATENCION_PARTO + ''

        }
        j = j + 1
        if (registro.PARTOS.length > 0) {

          cell = fila.getCell(j)

          if (registro.PARTOS[0].TIPO_RECIEN_NACIDO == 1) {
            cell.value = 'A TÉRMINO'
          }
          if (registro.PARTOS[0].TIPO_RECIEN_NACIDO == 2) {
            cell.value = 'PREMATURO'
          }
          if (registro.PARTOS[0].TIPO_RECIEN_NACIDO == 3) {
            cell.value = 'ABORTO'
          }
          if (registro.PARTOS[0].TIPO_RECIEN_NACIDO == 4) {
            cell.value = 'POST TÉRMINO'
          }


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

          if (registro.PARTOS[0].RN_SEXO == 1) {
            cell.value = 'MASCULINO'
          }
          if (registro.PARTOS[0].RN_SEXO == 2) {
            cell.value = 'FEMENINO'
          }
          if (registro.PARTOS[0].RN_SEXO == 3) {
            cell.value = 'NO DEFINIDO'
          }


        }
        j = j + 1


        if (registro.AtencionesPuerperios?.length > 0) {
          cell = fila.getCell(j)
          if (registro.AtencionesPuerperios[0].ESTADO_PUERPERIO == 1) {
            cell.value = 'A|' + moment(registro.AtencionesPuerperios[0].FECHA_ATENCION).format('DD/MM/yyyy')
          }


        }
        j = j + 1
        if (registro.AtencionesPuerperios?.length > 1) {
          cell = fila.getCell(j)

          if (registro.AtencionesPuerperios[1].ESTADO_PUERPERIO == 0) {
            cell.value = 'P|' + moment(registro.AtencionesPuerperios[1].FECHA_ATENCION).format('DD/MM/yyyy')
          }

        }






























        sheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
          row.eachCell(function (cell, colNumber) {
            cell.font = {
              name: 'Arial',
              family: 2,
              bold: false,
              size: 10,
            };
            cell.alignment = {
              vertical: 'middle', horizontal: 'center'
            };

            if (rowNumber >= 3) {
              for (var i = 1; i < 84; i++) {
                if (rowNumber == 3) {
                  row.getCell(i).fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'C7C7C7' }
                  };
                }
                row.getCell(i).border = {
                  top: { style: 'thin' },
                  left: { style: 'thin' },
                  bottom: { style: 'thin' },
                  right: { style: 'thin' }
                };
              }
            }
          });
        });




      })


      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        fs.saveAs(blob, 'REPORTE GESTANTE' + '.xlsx');
      });

      this.spinner.hide()

    }, err => {
      alert('ocurrio error de servicio')
      this.spinner.hide()
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
