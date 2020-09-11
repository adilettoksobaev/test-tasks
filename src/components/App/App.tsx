import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom'
import ClientsTable from '../ClientsTable/ClientsTable';
import Menu from '../Menu/Menu';
import ClientsGrid from '../ClientsGrid/ClientsGrid';
import './App.scss';

type Props = ReturnType<typeof mapDispatchToProps>;

const App:React.FC<Props> = (props) => {
    const { getClientsAction } = props;

    useEffect(() => {
        if(!localStorage.getItem(`clients`)) {
            getClientsAction();
        }
    }, [getClientsAction]);

    return (
        <>
            <Menu />
            <div className="containter">
                <Switch>
                    <Route 
                        path="/" 
                        component={ClientsTable}  
                        exact />
                    <Route 
                        path="/grid" 
                        component={ClientsGrid}  
                        exact />
                </Switch>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<Action> & ThunkDispatch<any, any, AnyAction>) => ({
    getClientsAction: () => dispatch(actions.app.getClientsAction()),
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(App));