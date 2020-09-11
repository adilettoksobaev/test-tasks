import { StateType } from 'typesafe-actions';
import rootReducer from './root-reducer';

import * as AppActions from './App/actions';

export { default } from './store';
export { default as rootReducer } from './root-reducer';

export const actions = {
    app: AppActions,
}

export type RootState = StateType<typeof rootReducer>;
