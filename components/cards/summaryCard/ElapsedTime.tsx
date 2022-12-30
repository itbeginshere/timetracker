import moment from 'moment';
import { useMemo } from 'react';

interface IElapsedTimeProps {
    duration : moment.Duration;
}

const ElapsedTime = (props : IElapsedTimeProps) => {
    
    const { duration } = props;

    const time = useMemo(() => {

        let result = '';

        if (duration.days() > 0) {
            result += `${duration.days()} Day${duration.days() > 1 ? 's' : ''} `;
        }

        if (duration.hours() > 0) {
            result += `${duration.hours()} Hour${duration.hours() > 1 ? 's' : ''} `;
        }

        if (duration.minutes() > 0) {
            result += `${duration.minutes()} Minute${duration.minutes() > 1 ? 's' : ''} `;
        }

        if (duration.seconds() > 0) {
            result += `${duration.seconds()} Second${duration.seconds() > 1 ? 's' : ''} `;
        }

        if (result === '') {
            result = 'No looged tasks.';
        }

        return result;

    }, [duration]);
    
    return (
        <span className={'text-lg font-semibold text-secondary'}>{time}</span>
    );
}

export default ElapsedTime;