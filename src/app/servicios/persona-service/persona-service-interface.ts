export interface PersonaServiceInterface {
  datos?:            Dato[];
  cantidad_reg?:     number;
  cantidad_paginas?: number;
}



export interface Dato {
  ID_PERSONA?:           number;
  ID_TIPOD?:             number;
  NRO_DOCUMENTO?:        string;
  ID_GENERO?:            number;
  NOMBRES?:              string;
  APELLIDO_PAT?:         string;
  APELLIDO_MAT?:         string;
  ID_DISTRITO?:          string;
  DIRECCION?:            string;
  FECHA_NAC?:            Date;
  TELEFONO?:             null | string;
  TELEFONO_ADICIONAL?:   null;
  CORREO?:               string;
  FECHA_CREACION?:       null;
  FECHA_ACTUALIZACION?:  null;
  ID_HC?:                number;
  NRO_HCL?:              string;
  COD_IPRESS?:           string;
  ID_CENTRO_POBLADO?:    string;
  TIPO_SEGURO?:          number;
  ID_GRADO_INSTRUCCION?: number;
  BENEFICIARIA_JUNTOS?:  number;
  ESTADO_CIVIL?:         number;
  IDIOMA?:               string;
  RELIGION?:             null | string;
  GRUPO_SANGUINEO?:      string;
  FACTOR_SANGUINEO?:     string;
  FEC_REGISTRO?:         null;
  ESTADO_HC?:            null;
  PERSONA?:              Persona;
  numero_personas?:      number;
  ipress?:               Ipress;
  distrito?:             Distrito;
  provincia?:            Provincia;
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
}

export interface Distrito {
  ID_DISTRITO?:  string;
  ID_PROVINCIA?: string;
  NOMBRE?:       string;
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
}

export interface Provincia {
  ID_PROVINCIA?: string;

  NOMBRE?:       string;
}
