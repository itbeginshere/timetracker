import moment from 'moment';

interface IDurationProps {
    value : number;
}

const Duration = (props : IDurationProps) => {

    const { value } = props;

    return (
        <span className={'font-medium'}>
            {('0' + Math.floor(moment.duration(value).asHours())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).asDays())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).asMinutes())).slice(-2)}:
            {('0' + Math.floor(moment.duration(value).asSeconds())).slice(-2)}
        </span>
    );
}

export default Duration;