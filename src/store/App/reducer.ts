import { Reducer } from "redux";
import { AppState, AppActionsTypes } from "./types";
import { AppActions } from "./actions";

const defaultState: AppState = {
    clients: JSON.parse(localStorage.getItem(`clients`) || '[]'),
};

export const authReducer: Reducer<AppState, AppActions> = (state = defaultState, action) => {

    switch (action.type) {
        case AppActionsTypes.GET_CLIENTS:
            localStorage.setItem(`clients`, JSON.stringify(action.clients));
            return {
                ...state,
                clients: action.clients,
            };
        case AppActionsTypes.ADD_CLIENT:
            let newClient = state.clients.concat();
            newClient.push(action.client);
            localStorage.setItem(`clients`, JSON.stringify(newClient));
            return {
                ...state,
                clients: newClient,
            };
        default:
            return state;
    }
};

export default authReducer;