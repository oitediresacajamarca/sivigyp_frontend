import { Component, OnInit } from '@angular/core';
import { PadronGestanteServiService } from 'src/app/servicios/reportes/padron-gestante-servi.service';
import { Fill, Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { EstadoCivilPipe } from 'src/app/pipes/estado-civil.pipe';
import { TipoDocumentoPipe } from 'src/app/pipes/tipo-documento.pipe';
import { TipoSeguroPipe } from 'src/app/pipes/tipo-seguro.pipe';

@Component({
  selector: 'app-reporte-gestante-padron',
  templateUrl: './reporte-gestante-padron.component.html',
  styleUrls: ['./reporte-gestante-padron.component.scss']
})
export class ReporteGestantePadronComponent implements OnInit {

  constructor(private rpt_serv: PadronGestanteServiService,private spinner: NgxSpinnerService,private ecp:EstadoCivilPipe,
    private tdp:TipoDocumentoPipe,private tsp:TipoSeguroPipe ) { }
  ambito_ipres: string = ''

  ngOnInit(): void {
  }

  selecciono_ambito(e: any) {


    this.ambito_ipres = e

  }
  Buscar() {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('PADRON DE GESTANTES');

    this.spinner.show();

    this.rpt_serv.cargar_padron(this.ambito_ipres).subscribe(reporte => {
      this.spinner.hide();
      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
      let encabezado = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })


      let f: Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'cccccc' }

      };

let i=1
      let cell = encabezado.getCell(i)
      cell.value = 'RED';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'MICRORED';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'PROVINCIA';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

   i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'DISTRITO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'CENTRO POBLADO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'IPRESS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'RENIPRESS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'APELLIDO PATERNO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

   i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'APELLIDO MATERNO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1

      cell = encabezado.getCell(i)
      cell.value = 'NOMBRES';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };



   i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'FECHA NACIMIENTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

   i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'EDAD';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

   i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'ESTADO CIVIL';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'TIPO DE DOCUMENTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'NUMERO DE DOCUMENTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };
    


   i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'DIRECCION';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'TIPO SEGURO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'NIVEL DE INSTRUCCCION';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'BENEFICIARIO JUNTOS';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'IDIOMA';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'FECHA ULTIMA REGLA';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'FECHA PROBABLE DE PARTO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'FECHA REGISTRO';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'FECHA CONTROL PRENATAL';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'NUMERO DE GESTACIONES ';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };

      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'NUMERO DE HIJOS VIVOS ';
      cell.fill = f
      cell.font = { name: 'Arial', size: 12 };
      cell.alignment = { horizontal: 'center' };


      i=i+1
      cell = encabezado.getCell(i)
      cell.value = 'LISTA DE RIESGOS';
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
      col = sheet.getColumn(21)
      col.width = 20

      col = sheet.getColumn(22)
      col.width = 20

      col = sheet.getColumn(23)
      col.width = 20

      col = sheet.getColumn(24)
      col.width = 20

      col = sheet.getColumn(25)
      col.width = 20

      col = sheet.getColumn(26)
      col.width = 20

      col = sheet.getColumn(27)
      col.width = 20

      col = sheet.getColumn(28)
      col.width = 20

      col = sheet.getColumn(29)
      col.width = 20

      col = sheet.getColumn(30)
      col.width = 20

      

      let row_it

      reporte.map(registro => {

        row_it = sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) })
        i=1
        cell = row_it.getCell(i)
        cell.value = registro.RED

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.MICRORED

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.PROVINCIA

     i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.DISTRITO

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.CP

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.IPRESS

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.COD_IPRESS

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.APELLIDO_PATERNO

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.APELLIDO_MATERNO

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.NOMBRES

        i=i+1
        cell = row_it.getCell(i)
      
        cell.value = new Date(registro.FECHA_NAC)

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.EDAD


        i=i+1
        cell = row_it.getCell(i)
        cell.value =this.ecp.transform( registro.ESTADO_CIVIL)+''

        i=i+1
        cell = row_it.getCell(i)
        cell.value =this.tdp.transform(registro.TIPO_DOCUMENTO) +''

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.NRO_DOCUMENTO



        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.DIRECCION

        i=i+1
        cell = row_it.getCell(i)
        cell.value =this.tsp.transform( registro.TIPO_SEGURO)+''

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.GRADO_INSTRUCION

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.BENEFICIARIA_JUNTOS

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.IDIOMA



        i=i+1
        cell = row_it.getCell(i)
        cell.value = new Date( registro.FUR_ATENCION)

        i=i+1
        cell = row_it.getCell(i)
        cell.value = new Date( registro.FECHA_POSIBLE_PARTO)

        i=i+1
        cell = row_it.getCell(i)
        cell.value = new Date( registro.FEC_REGISTRO)

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.FECHA_PAP

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.NRO_GESTACIONES

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.HIJOS_VIVOS

        i=i+1
        cell = row_it.getCell(i)
        cell.value = registro.RIESGOS


      })


      
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
            for (var i = 1; i < 40; i++) {
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


      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        fs.saveAs(blob, 'REPORTE PADRON GESTANTE' + '.xlsx');

      });



    })

  }

}
