import React from 'react';
import 'moment/locale/ru';
import moment from 'moment'
import Moment from 'react-moment';

type Props = {
    birthDate: Date | string;
};

const DateFormat:React.FC<Props> = (props) => {
    const { birthDate } = props;
    const date = moment(birthDate).isValid();
    
    if(date) {
        return <Moment format="DD.MM.YYYY" locale="ru">{birthDate}</Moment>
    } else {
        return <span>{birthDate}</span>
    }
}

export default DateFormat;