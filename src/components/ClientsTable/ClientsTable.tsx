import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { actions, RootState } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { IClients } from '../../store/App/types';
import AddClientModal from '../AddClientModal/AddClientModal';
import DateFormat from '../bricks/DateFormat';
import './ClientsTable.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const ClientsTable:React.FC<Props> = (props) => {
    const { clients, deleteClientsAction } = props;

    const [openModal, setOpenModal] = useState(false);

    const modalOpenClick = () => {
        setOpenModal(true)
    }

    const modalCloseClick = () => {
        setOpenModal(false)
    }

    const deleteClick = (id: number) => {
        const idx = clients.findIndex((item) => item.IDPERSON === id);
        const items = [
          ...clients.slice(0, idx),
          ...clients.slice(idx + 1)
        ];
        deleteClientsAction(items);
    }

    return (
        <div className="container">
            <div className="header">
                <div className="title">Табличная</div>
                <button className="btn" onClick={modalOpenClick}>Новый клиент</button>
            </div>
            <div className="table-root">
                <table>
                    <thead>
                        <tr>
                            <th className="left">№</th>
                            <th className="center scope">ФИО</th>
                            <th>STATUSNAME</th>
                            <th>ACC1NUM</th>
                            <th>ORGNAMESHORT</th>
                            <th>PERSONTYPENAME</th>
                            <th>CURRNAME</th>
                            <th>IDCARD</th>
                            <th>BIRTHDATE</th>
                            <th>DOCSERIES</th>
                            <th>DOCNUM</th>
                            <th>DOCTYPENAME</th>
                            <th>Дейтсвия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={client.IDPERSON}>
                                <td>{index + 1}</td>
                                <td className="center">
                                    {client.LASTNAME} {client.FIRSTNAME} {client.PATRONYMIC}
                                </td>
                                <td>{client.STATUSNAME}</td>
                                <td>{client.ACC1NUM}</td>
                                <td>{client.ORGNAMESHORT}</td>
                                <td>{client.PERSONTYPENAME}</td>
                                <td>{client.CURRNAME}</td>
                                <td>{client.IDCARD}</td>
                                <td>
                                    <DateFormat birthDate={client.BIRTHDATE} />
                                </td>
                                <td>{client.DOCSERIES}</td>
                                <td>{client.DOCNUM}</td>
                                <td>{client.DOCTYPENAME}</td>
                                <td><button className="delete" onClick={() => deleteClick(client.IDPERSON)}>Удалить</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddClientModal 
                openModal={openModal}
                modalCloseClick={modalCloseClick} />
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    clients: state.app.clients,
});

const mapDispatchToProps = (dispatch: Dispatch<Action> & ThunkDispatch<any, any, AnyAction>) => ({
    deleteClientsAction: (clients: IClients[]) => dispatch(actions.app.deleteClientsAction(clients)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ClientsTable);