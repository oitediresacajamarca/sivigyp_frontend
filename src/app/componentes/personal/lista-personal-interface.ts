
export interface ListaPersonalInterface {
  ID_TRABAJADOR_IPRESS: number;
  ID_PERSONA:           number;
  ID_PROFESION:         number;
  ID_CONDICION_LABORAL: number;
  ID_IPRESS:            string;
  DESCRIPCION:          string;
  FEC_INGRESO:          Date;
  ESTADO:               boolean;
  persona:              Persona;
  profesion:            Profesion;
  codicion_laboral:     CodicionLaboral;
}

export interface CodicionLaboral {
  ID_CONDICION_LAB: number;
  DESCRIPCION:      Descripcion;
}

export enum Descripcion {
  CAS = "C.A.S.",
  Externo = "EXTERNO",
  Nombrado = "NOMBRADO",
}

export interface Persona {
  ID_PERSONA:    number;
  ID_TIPOD:      number;
  NRO_DOCUMENTO: string;
  ID_GENERO:     number;
  NOMBRES:       string;
  APELLIDO_PAT:  string;
  APELLIDO_MAT:  string;
  ID_DISTRITO:   string;
  DIRECCION:     string;
  FECHA_NAC:     Date;
  TELEFONO:      string;
  CORREO:        string;
}

export interface Profesion {
  ID_PROFESION:          number;
  DESCRIPCION_PROFESION: DescripcionProfesion;
  ID_COLEGIO:            string;
  ESTADO:                boolean;
  SECTOR:                Sector | null;
  ESPECIALIDAD:          null;
}

export enum DescripcionProfesion {
  IngenieroDeSistemas = "INGENIERO DE SISTEMAS",
  Obstetra = "OBSTETRA",
}

export enum Sector {
  Salud = "SALUD",
}
