import moment from 'moment';

interface IDurationProps {
    value : number;
    isCounting : boolean;
}

const Duration = (props : IDurationProps) => {

    const { value, isCounting } = props;

    return (
        <span className={`${isCounting ? 'font-bold' : 'font-medium'}`}>
            {('0' + Math.floor(moment.duration(value).days())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).hours())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).minutes())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).seconds())).slice(-2)}
        </span>
    );
}

export default Duration;