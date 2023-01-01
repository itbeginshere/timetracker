import moment from 'moment';
import React from 'react';

interface IDatePickerProps {
    value : moment.Moment | null;
    name : string;
    label : string;
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = (props : IDatePickerProps) => {

    const { value, name, label } = props;
    const { onChange } = props;

    return (
        <div className={'flex flex-col items-start sm:flex-row sm:items-center'}>
            <label htmlFor={name} className={'w-[120px] font-semibold'}>{label}</label>
            <input 
                type={'date'} 
                className={'px-2 py-1 rounded-lg outline-none border-2 border-gray-200 active:border-primary focus:border-primary'} 
                onChange={onChange} 
                value={value?.format('YYYY-MM-DD')} 
            />
        </div>
    );
}

export default DatePicker;