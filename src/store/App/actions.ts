import { ActionCreator } from 'redux';
import { AppActionsTypes, IClientsAction, IClients, IAddClientAction } from './types';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { API } from '../../Api/api';
import { RootState } from '..';
import { Action } from 'typesafe-actions';

export type AppActions = IClientsAction | IAddClientAction;

export const getClientsAction: ActionCreator<ThunkAction<Promise<any>, RootState, string, IClientsAction>> = 
    () => {
    return async (dispatch: ThunkDispatch<RootState, void, Action<any>>) => {
        try {
            const response = await API.person();
            const { data } = response;

            const clients = data.rows.map((item: any) => {
                let newItem: any = {}

                data.metaData.forEach((row: any, index: number) => {
                    newItem[row.name] = item[index]
                });

                return newItem
            });

            const successAction: IClientsAction = {
                type: AppActionsTypes.GET_CLIENTS,
                clients
            };

            dispatch(successAction);
        }
        catch (error) {
            // error log
            console.log(error);
        }
    }
}

export const deleteClientsAction: ActionCreator<IClientsAction> = (clients: IClients[]) => {
    return {
        type: AppActionsTypes.GET_CLIENTS,
        clients
    }
}

export const addClientAction: ActionCreator<IAddClientAction> = (client: IClients) => {
    return {
        type: AppActionsTypes.ADD_CLIENT,
        client
    }
}