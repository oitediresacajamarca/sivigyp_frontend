export interface ReporteGestanteInterface
{

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
  RIESGOS?:                   any[];
  AtencionesPuerperios?:AtencionesPuerperios[]
}

export interface AtencionesPuerperios{
  ID_ATENCION_PUERPERIO?: number;
    ID_ATENCION?:           number;
    FECHA_ATENCION?:        Date;
    FECHA_REGISTRO?:        Date;
    USU?:                   string;
    ESTADO_PUERPERIO?:      number;
    ESTADO_CERRADO?:        number;
    NRO_ATENCION?:          number;
}
export interface AtencionesSemanale {
  ID_ATENCION_REG?:    null;
  ID_ATENCION?:        number;
  FECHA_ATENCION_REG?: null;
  NUMERO_SEMANA?:      number;
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
