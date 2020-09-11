import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { Clients, IClients } from '../../store/App/types';
import './AddClientModal.scss';

type Props = ReturnType<typeof mapDispatchToProps> & {
    openModal: boolean;
    modalCloseClick: () => void;
}
const AddClientModal:React.FC<Props> = (props) => {
    const { openModal, modalCloseClick, addClientAction } = props;

    const [client, setClient] = useState(new Clients());

    const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setClient(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}));
    };

    const addClient = () => {
        client.IDPERSON = Math.floor(Math.random() * Math.floor(1000));
        addClientAction(client);
    }

    return (
        <div className={`modal ${openModal ? 'open' : 'close'}`}>
            <div className="modal__content">
                <i className="material-icons close" onClick={modalCloseClick}>close</i>
                <div className="title">Новый клиент</div>
                <form className="edit-form" onSubmit={addClient}>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">LASTNAME</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="LASTNAME" 
                            defaultValue={client.FIRSTNAME} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">FIRSTNAME</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="FIRSTNAME" 
                            defaultValue={client.FIRSTNAME} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">PATRONYMIC</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="PATRONYMIC" 
                            defaultValue={client.PATRONYMIC} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">STATUS NAME</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="STATUSNAME" 
                            defaultValue={client.STATUSNAME} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">ACC1 NUM</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="ACC1NUM" 
                            defaultValue={client.ACC1NUM} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">ORGNAME SHORT</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="ORGNAMESHORT" 
                            defaultValue={client.ORGNAMESHORT} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">PERSONTYPE NAME</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="PERSONTYPENAME" 
                            defaultValue={client.PERSONTYPENAME} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">CURR NAME</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="CURRNAME" 
                            defaultValue={client.CURRNAME} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">ID CARD</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="IDCARD" 
                            defaultValue={client.IDCARD} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">BIRTHDATE</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="BIRTHDATE" 
                            defaultValue={client.BIRTHDATE.toString()} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">DOCSERIES</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="DOCSERIES" 
                            defaultValue={client.DOCSERIES} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">DOCNUM</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="DOCNUM" 
                            defaultValue={client.DOCNUM} 
                            onChange={changeInputHandler} />
                    </label>
                    <label className="edit-form__label">
                        <span className="edit-form__plaseholder">DOCTYPENAME</span>
                        <input 
                            className="edit-form__input" 
                            type="text" 
                            name="DOCTYPENAME" 
                            defaultValue={client.DOCTYPENAME} 
                            onChange={changeInputHandler} />
                    </label>
                    <div className="edit-form__btn-group">
                        <div className="btn edit-form_cancel" onClick={modalCloseClick}>Отмена</div>
                        <input className="btn" type="submit" value="Сохранить" />
                    </div>
                </form>
            </div>
            <div className="modal__bg" onClick={modalCloseClick}></div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<Action> & ThunkDispatch<any, any, AnyAction>) => ({
    addClientAction: (client: IClients) => dispatch(actions.app.addClientAction(client)),
});
  
export default connect(null, mapDispatchToProps)(AddClientModal);