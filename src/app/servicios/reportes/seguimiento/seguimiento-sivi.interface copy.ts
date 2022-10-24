import { RIESGOS } from "../../atencion-reg/interface/atenciones-pendientes";

export interface SeguimientoSiviInterfaaceOb {

   ID_ATENCION?:               number;
    ID_HC?:                     number;
    ID_RESPONSABLE?:            number;
    FECHA?:                     Date;
    FEC_REGISTRO?:              Date;
    FECHA_ATENCION_PRENATAL?:   null;
    FUR_ATENCION?:              Date;
    NRO_GESTACIONES?:           number;
    TIPO_PARIEDAD?:             string;
    RECIEN_NACIDOS_TERMINO?:    number;
    RECIEN_NACIDOS_PREMATUROS?: number;
    NUMERO_ABORTOS?:            number;
    HIJOS_VIVOS?:               number;
    FECHA_CONFIRMO_GESTACION?:  Date;
    FECHA_POSIBLE_PARTO?:       Date;
    OBSERVACIONES?:             string;
    USU?:                       string;
    ESTADO_ATENCION?:           number;
    OBSERVACIONES_FIN?:         null | string;
    FEC_ACTUALIZACION?:         null;
    ESTADO_ACTUAL_GESTANTE?:    null;
    ATENCIONES_SEMANALES?:      AtencionesSemanale[];
    HistoriaClinica?:           HistoriaClinica;
    RIESGOS?:                   RIESGOS[];

    PARTOS:PARTO[];
}
export interface CentroPoblado {
  ID_CENTROP?:  string;
  ID_DISTRITO?: string;
  NOMBRE?:      string;
  LONGITUD?:    number;
  LATITUD?:     number;
}

export interface PARTO{
  ID_ATENCION_PARTO?:  number;
  ID_ATENCION?:        number;
  FECHA_PARTO?:        Date;
  HORA_PARTO?:         string;
  TIPO_PARTO?:         number;
  LUGAR_PARTO?:        string;
  ID_ATENDIO_PARTO?:   number;
  TIPO_RECIEN_NACIDO?: number;
  RN_VIVO?:            number;
  RN_SEXO?:            number;
  RN_PESO?:            number;
  USU?:                string;
  FEC_REGISTRO?:       Date;
  EDAD_GESTACIONAL?:   number;
  TIPO_ATENCION_PARTO?:TIPO_ATENCION_PARTO;
}

export interface TIPO_ATENCION_PARTO {
  ID_TIPO_ATENCION_PARTO:number;
    NOMBRE_TIPO_ATENCION_PARTO:string
}
export interface AtencionesSemanale {
    ID_ATENCION_REG?:    null;
    ID_ATENCION?:        number;
    FECHA_ATENCION_REG?: null;
    NUMERO_SEMANA:      number;
    ESTADO_ATENCION?:    null;
    USU?:                null;
    ESTADO_CERRADO?:     null;
    OBSERVACIONES?:      null;
}

export interface HistoriaClinica {
    ID_HC?:                number;
    NRO_HCL?:              string;
    ID_PERSONA?:           number;
    COD_IPRESS?:           string;
    ID_CENTRO_POBLADO?:    string;
    TIPO_SEGURO?:          number;
    ID_GRADO_INSTRUCCION?: number;
    BENEFICIARIA_JUNTOS?:  number;
    ESTADO_CIVIL?:         number;
    IDIOMA?:               string;
    RELIGION?:             null;
    GRUPO_SANGUINEO?:      string;
    FACTOR_SANGUINEO?:     string;
    TELEFONO?:             null;
    FEC_REGISTRO?:         null;
    ESTADO_HC?:            null;
    PERSONA?:              Persona;
    IPRESS?:               Ipress;
    CENTRO_POBLADO:CentroPoblado;
    ESTADO_CIVIL_DESCRIPCION:ESTADO_CIVIL_DESCRIPCION;
    TIPO_SEGURO_DESCRIPCION:TIPO_SEGURO_DESCRIPCION;
    GRADO_INSTRUCCION_DESCRIPCION:GRADO_INSTRUCCION_DESCRIPCION;
}

export interface ESTADO_CIVIL_DESCRIPCION{
  ID_ESTADO_CIVIL:number;
  NOMBRE:string

}
export interface GRADO_INSTRUCCION_DESCRIPCION{
  ID_GRADO_INSTRUCCION:number;
  NOMBRE:string

}

export interface TIPO_SEGURO_DESCRIPCION{
  ID_TIPO_SEGUROL:number;
  NOMBRE:string;
  ABRV:string;

}

export interface Ipress {
    COD_IPRESS?:  string;
    ID_UE?:       number;
    ID_DISTRITO?: string;
    NOMBRE?:      string;
    DIRECCION?:   string;
    ID_MICRORED?: number;
    CATEGORIA?:   string;
    TELEFONO?:    string;
    CORREO?:      string;
    MICRORED?:    Microred;
}

export interface Microred {
    ID_MICRORED?: number;
    ID_RED?:      number;
    NOMBRE?:      string;
    RED?:         Red;
}

export interface Red {
    ID_RED?: number;
    NOMBRE?: string;
}

export interface Persona {
    ID_PERSONA?:          number;
    ID_TIPOD?:            number;
    NRO_DOCUMENTO?:       string;
    ID_GENERO?:           number;
    NOMBRES?:             string;
    APELLIDO_PAT?:        string;
    APELLIDO_MAT?:        string;
    ID_DISTRITO?:         string;
    DIRECCION?:           string;
    FECHA_NAC?:           Date;
    TELEFONO?:            string;
    TELEFONO_ADICIONAL?:  null;
    CORREO?:              string;
    FECHA_CREACION?:      null;
    FECHA_ACTUALIZACION?: null;
    DISTRITO?:            Distrito;
}

export interface Distrito {
    ID_DISTRITO?:  string;
    ID_PROVINCIA?: string;
    NOMBRE?:       string;
    PROVINCIA?:    Provincia;
}

export interface Provincia {
    ID_PROVINCIA?: string;
    NOMBRE?:       string;
}
