export interface AtencionesPendientes {

    ID_ATENCION_REG:    number;
    ID_ATENCION:        number;
    FECHA_ATENCION_REG: Date;

    EDAD_GESTACIONAL:   number;
    ESTADO_ATENCION:    number;
    USU:                string;
    ESTADO_CERRADO:     number;
    CORRELATIVO:        null;
    FEC_REGISTRO:       null;
    OBSERVACIONES:      null;
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
    OBSERVACIONES_FIN:         null;
    FEC_ACTUALIZACION:         null;
    ESTADO_ACTUAL_GESTANTE:    null;
    HistoriaClinica:           HistoriaClinica;
    FECHA_ATENCION_PRENATAL:Date;
    RIESGOS:RIESGOS[];
}

export interface RIESGOS{
  ID_RIESGO: number;
  NOMBRE:    string;
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
    IDIOMA:               string;
    RELIGION:             null;
    GRUPO_SANGUINEO:      string;
    FACTOR_SANGUINEO:     string;
    TELEFONO:             null;
    FEC_REGISTRO:         null;
    ESTADO_HC:            null;
    PERSONA:              Persona;
}

export interface Persona {
    ID_PERSONA:          number;
    ID_TIPOD:            number;
    NRO_DOCUMENTO:       string;
    ID_GENERO:           number;
    NOMBRES:             string;
    APELLIDO_PAT:        string;
    APELLIDO_MAT:        string;
    ID_DISTRITO:         string;
    DIRECCION:           string;
    FECHA_NAC:           Date;
    TELEFONO:            string;
    TELEFONO_ADICIONAL:  null;
    CORREO:              string;
    FECHA_CREACION:      null;
    FECHA_ACTUALIZACION: null;
}

