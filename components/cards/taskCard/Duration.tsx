import moment from 'moment';

interface IDurationProps {
    value : number;
    isCounting : boolean;
}

const Duration = (props : IDurationProps) => {

    const { value, isCounting } = props;

    return (
        <span className={`${isCounting ? 'font-bold' : 'font-medium'}`}>
            {('0' + Math.floor(moment.duration(value).asDays())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).asHours())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).asMinutes())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).asSeconds())).slice(-2)}
        </span>
    );
}

export default Duration;