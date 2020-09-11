import { Action } from "typesafe-actions";

export interface AppState {
    clients: IClients[],
}

export enum AppActionsTypes {
    GET_CLIENTS = 'GET_CLIENTS',
    ADD_CLIENT = 'ADD_CLIENT',
}

export interface IClientsAction extends Action<AppActionsTypes.GET_CLIENTS> {
    clients: IClients[];
}

export interface IAddClientAction extends Action<AppActionsTypes.ADD_CLIENT> {
    client: IClients;
}

export interface IClients {
    CARD: string;
    LASTNAME: string;
    FIRSTNAME: string;
    PATRONYMIC: string;
    IDPERSON: number;
    STATUSNAME: string;
    ACC1NUM: string;
    CARDTEMPLNAME: string | null;
    ORGNAMESHORT: string;
    PERSONTYPENAME: string;
    CURRNAME: string;
    IDCARD: number | string;
    BIRTHDATE: Date | string;
    DOCSERIES:  string;
    DOCNUM: string;
    IDTASKAUTHSTATUS: number;
    DOCTYPENAME: string;
}

export class Clients implements IClients {
    CARD: string;
    LASTNAME: string;
    FIRSTNAME: string;
    PATRONYMIC: string;
    IDPERSON: number;
    STATUSNAME: string;
    ACC1NUM: string;
    CARDTEMPLNAME: string | null;
    ORGNAMESHORT: string;
    PERSONTYPENAME: string;
    CURRNAME: string;
    IDCARD: number | string;
    BIRTHDATE: Date | string;
    DOCSERIES:  string;
    DOCNUM: string;
    IDTASKAUTHSTATUS: number;
    DOCTYPENAME: string;

    constructor(source?: IClients) {
        this.CARD = source ? source.CARD : '';
        this.LASTNAME = source ? source.LASTNAME : '';
        this.FIRSTNAME = source ? source.FIRSTNAME : '';
        this.PATRONYMIC = source ? source.PATRONYMIC : '';
        this.STATUSNAME = source ? source.STATUSNAME : '';
        this.IDPERSON = source ? source.IDPERSON : 0;
        this.ACC1NUM = source ? source.ACC1NUM : '';
        this.CARDTEMPLNAME = source ? source.CARDTEMPLNAME : null;
        this.ORGNAMESHORT = source ? source.ORGNAMESHORT : '';
        this.PERSONTYPENAME = source ? source.PERSONTYPENAME : '';
        this.CURRNAME = source ? source.CURRNAME : '';
        this.IDCARD = source ? source.IDCARD : '';
        this.BIRTHDATE = source ? source.BIRTHDATE : '';
        this.DOCSERIES = source ? source.DOCSERIES : '';
        this.DOCNUM = source ? source.DOCNUM : '';
        this.IDTASKAUTHSTATUS = source ? source.IDTASKAUTHSTATUS : 0;
        this.DOCTYPENAME = source ? source.DOCTYPENAME : '';
    }
}
  