export interface AtencionPuerperioInterface {

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
    OBSERVACIONES_FIN:         string;
    FEC_ACTUALIZACION:         Date;
    ESTADO_ACTUAL_GESTANTE:    null;
    AtencionesPuerperios:      AtencionesPuerperio[];
    PARTOS:                    Parto[];
}

export interface AtencionesPuerperio {
    ID_ATENCION_PUERPERIO: number;
    ID_ATENCION:           number;
    FECHA_ATENCION:        Date;
    FECHA_REGISTRO:        Date;
    USU:                   string;
    ESTADO_PUERPERIO:      number;
    ESTADO_CERRADO:        number;
    NRO_ATENCION:          number;
}

export interface Parto {
    ID_ATENCION_PARTO:  number;
    ID_ATENCION:        number;
    FECHA_PARTO:        Date;
    HORA_PARTO:         Date;
    TIPO_PARTO:         number;
    LUGAR_PARTO:        string;
    ID_ATENDIO_PARTO:   number;
    TIPO_RECIEN_NACIDO: number;
    RN_VIVO:            number;
    RN_SEXO:            number;
    RN_PESO:            number;
    USU:                string;
    FEC_REGISTRO:       Date;
    EDAD_GESTACIONAL:   number;
}
