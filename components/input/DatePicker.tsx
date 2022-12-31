import moment from 'moment';
import React from 'react';

interface IDatePickerProps {
    value : moment.Moment | null;
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = (props : IDatePickerProps) => {

    const { value, onChange } = props;

    return (
           <input 
                type={'date'} 
                className={'px-2 py-1 rounded-lg outline-none border-2 border-white active:border-primary focus:border-primary'} 
                onChange={onChange} 
                value={value?.format('YYYY-MM-DD')} 
            />
    );
}

export default DatePicker;