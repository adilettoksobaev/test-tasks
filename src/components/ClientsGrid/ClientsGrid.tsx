import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DateFormat from '../bricks/DateFormat';
import './ClientsGrid.scss';

function ClientsGrid() {
    const clients = useSelector((state: RootState) => state.app.clients);

    return (
        <div className="container">
            <div className="header">
                <div className="title">Блочная</div>
            </div>
            <div className="row">
                {clients.map(client => (
                    <div className="col" key={client.IDPERSON}>
                        <div className="client">
                            <div className="client__item">
                                <span className="client__strong">LASTNAME:</span>
                                <span className="client__label">{client.LASTNAME}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">FIRSTNAME:</span>
                                <span className="client__label">{client.FIRSTNAME}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">PATRONYMIC:</span>
                                <span className="client__label">{client.PATRONYMIC}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">CARD:</span>
                                <span className="client__label">{client.CARD}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">IDPERSON:</span>
                                <span className="client__label">{client.IDPERSON}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">STATUSNAME:</span>
                                <span className="client__label">{client.STATUSNAME}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">ACC1NUM:</span>
                                <span className="client__label">{client.ACC1NUM}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">ACC1NUM:</span>
                                <span className="client__label">{client.ACC1NUM}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">ORGNAMESHORT:</span>
                                <span className="client__label">{client.ORGNAMESHORT}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">IDCARD:</span>
                                <span className="client__label">{client.IDCARD}</span>
                            </div>
                            <div className="client__item">
                                <span className="client__strong">BIRTHDATE:</span>
                                <span className="client__label">
                                    <DateFormat birthDate={client.BIRTHDATE} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientsGrid;