export interface DataGestanteInterface {
    ID_PERSONA:      number;
    NOMBRES:         string;
    APELLIDO_PAT:    string;
    APELLIDO_MAT:    string;
    ID_TIPOD:        number;
    NRO_DOCUMENTO:   string;
    FECHA_NAC:       string;
    ID_DISTRITO:     string;

    DIRECCION:       string;
    TELEFONO:        string;
    TELEFONO_ADICIONAL: string;
    CORREO:          String;
    ID_GENERO:       number;

    ID_CENTRO_POBLADO:string;
    RELIGION:string;
    IDIOMA: string;
    GRUPO_SANGUINEO:string;
    FACTOR_SANGUINEO:string;
    FEC_REGISTRO:string;
    ESTADO_HC:string;
  ESTADO_CIVIL: number;
  establecimientos_cantidad:number;
    ID_GRADO_INSTRUCCION:number;
    BENEFICIARIA_JUNTOS:number;
    TIPO_SEGURO:number;
    COD_IPRESS:string;
    ID_HC:number;
    NRO_HCL:string;
    ipress:Ipress;
    distrito:Distrito;
    provincia:Provincia;
}

export interface Ipress {
  COD_IPRESS:  string;
  ID_UE:       number;
  ID_DISTRITO: string;
  NOMBRE:      string;
  DIRECCION:   string;
  ID_MICRORED: number;
  CATEGORIA:   string;
  TELEFONO:    string;
  CORREO:      string;
}
export interface Distrito {
  ID_DISTRITO:  string;
  ID_PROVINCIA: string;
  NOMBRE:       string;
}

export interface Provincia {
  ID_PROVINCIA: string;
  NOMBRE:       string;
}
