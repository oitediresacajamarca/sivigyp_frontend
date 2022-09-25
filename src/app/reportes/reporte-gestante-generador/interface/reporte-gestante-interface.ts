export interface ReporteGestanteInterface
{
  ID_ATENCION_REG:    number;
  ID_ATENCION:        number;
  FECHA_ATENCION_REG: Date;
  EDAD_GESTACIONAL:   number;
  ESTADO_ATENCION:    number;
  USU:                string;
  ESTADO_CERRADO:     number;
  CORRELATIVO:        number | null;
  FEC_REGISTRO:       null;
  ATENCION:           Atencion;
}

export interface Atencion {
  ID_ATENCION:               number;
  ID_HC:                     number;
  ID_RESPONSABLE:            number;
  FECHA:                     Date;
  FEC_REGISTRO:              Date;
  FUR_ATENCION:              Date;
  NRO_GESTACIONES:           number;
  TIPO_PARIEDAD:             string;
  RECIEN_NACIDOS_TERMINO:    number;
  RECIEN_NACIDOS_PREMATUROS: number;
  NUMERO_ABORTOS:            number;
  HIJOS_VIVOS:               number;
  FECHA_CONFIRMO_GESTACION:  Date;
  FECHA_POSIBLE_PARTO:       Date;
  OBSERVACIONES:             string;
  USU:                       string;
  ESTADO_ATENCION:           number;
  OBSERVACIONES_FIN:         null | string;
  FEC_ACTUALIZACION:         Date | null;
  HistoriaClinica:           HistoriaClinica;
}

export interface HistoriaClinica {
  ID_HC:                number;
  NRO_HCL:              string;
  ID_PERSONA:           number;
  COD_IPRESS:           string;
  ID_CENTRO_POBLADO:    string;
  TIPO_SEGURO:          number;
  ID_GRADO_INSTRUCCION: number;
  BENEFICIARIA_JUNTOS:  number;
  ESTADO_CIVIL:         number;
  IDIOMA:               Idioma;
  RELIGION:             null | string;
  GRUPO_SANGUINEO:      GrupoSanguineo;
  FACTOR_SANGUINEO:     FactorSanguineo;
  TELEFONO:             null | string;
  FEC_REGISTRO:         Date | null;
  ESTADO_HC:            number | null;
  PERSONA:              Persona;
  IPRESS:               Ipress;
  CENTRO_POBLADO:       CentroPoblado;
}

export interface CentroPoblado {
  ID_CENTROP:  string;
  ID_DISTRITO: string;
  NOMBRE:      string;
  LONGITUD:    number | null;
  LATITUD:     number | null;
}

export enum FactorSanguineo {
  NR = "N.R.",
  Negativo = "NEGATIVO",
  Positivo = "POSITIVO",
}

export enum GrupoSanguineo {
  A = "A",
  B = "B",
  NR = "N.R.",
  O = "O",
}

export enum Idioma {
  Castelano = "CASTELANO",
  Castellano = "CASTELLANO",
  Catolica = "CATOLICA",
  IdiomaCastellano = "CASTELLANO ",
  Quechua = "QUECHUA",
}

export interface Ipress {
  COD_IPRESS:  string;
  ID_UE:       number;
  ID_DISTRITO: string;
  NOMBRE:      string;
  DIRECCION:   string;
  ID_MICRORED: number;
  CATEGORIA:   Categoria;
  TELEFONO:    null | string;
  CORREO:      null | string;
  MICRORED:    Microred;
}

export enum Categoria {
  I1 = "I-1",
  I2 = "I-2",
  I3 = "I-3",
  I4 = "I-4",
  Ii1 = "II-1",
}

export interface Microred {
  ID_MICRORED: number;
  ID_RED:      number;
  NOMBRE:      string;
  RED:         Red;
}

export interface Red {
  ID_RED: number;
  NOMBRE: Nombre;
}

export enum Nombre {
  Bambamarca = "BAMBAMARCA",
  Cajabamba = "CAJABAMBA",
  Cajamarca = "CAJAMARCA",
  Celendin = "CELENDIN",
  Chota = "CHOTA",
  Contumaza = "CONTUMAZA",
  Cutervo = "CUTERVO",
  Hualgayoc = "HUALGAYOC",
  Jaen = "JAEN",
  SANIgnacio = "SAN IGNACIO",
  SANMarcos = "SAN MARCOS",
  SANMiguel = "SAN MIGUEL",
  SANPablo = "SAN PABLO",
  SantaCruz = "SANTA CRUZ",
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
  DIRECCION:     null | string;
  FECHA_NAC:     Date;
  TELEFONO:      Correo | null;
  CORREO:        Correo | null;
  DISTRITO:      Distrito;
}

export enum Correo {
  Pendiente = "PENDIENTE",
}

export interface Distrito {
  ID_DISTRITO:  string;
  ID_PROVINCIA: string;
  NOMBRE:       string;
  PROVINCIA:    Provincia;
}

export interface Provincia {
  ID_PROVINCIA: string;
  NOMBRE:       Nombre;
}

