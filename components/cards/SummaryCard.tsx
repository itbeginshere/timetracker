import moment from 'moment';
import { useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';
import LoadingIndicator from '../common/LoadingIndicator';
import ElapsedTime from './summaryCard/ElapsedTime';

const SummaryCard = () => {
    
    const tasks = useAppSelector(x => x.taskState.tasks);
    const isTaskLoading = useAppSelector(x => x.taskState.isLoading);
    const startDate = useAppSelector(x => x.taskState.startDate);
    const endDate = useAppSelector(x => x.taskState.endDate);
    const showCompleted = useAppSelector(x => x.taskState.completed);
    
    const filteredTasks = useMemo(() => {

        let result = tasks.filter(x => showCompleted ? true : !x.completed);

        if (startDate) {
            result = result.filter(x => x.createdOn >= startDate.valueOf());
        }

        if (endDate) {
            result = result.filter(x => x.createdOn <= endDate.valueOf());
        }

        return result;

    }, [tasks, showCompleted, startDate, endDate]);

    const savedTime = useMemo(() => {

        const totalDuration = filteredTasks.reduce((acc, item) => {
            return acc + item.duration;
        }, 0);

        return moment.duration(totalDuration);

    }, [filteredTasks]);

    const completedCount = useMemo(() => {
        return filteredTasks.filter(x => x.completed).length;
    }, [filteredTasks]);

    const inProgressCount = useMemo(() => {
        return filteredTasks.filter(x => !x.completed).length;
    }, [filteredTasks]);

    const completionPercentage = useMemo(() => {
        
        if (completedCount <= 0 || filteredTasks.length <= 0) return 0;
        
        return Math.round((completedCount / filteredTasks.length) * 100);
    },[completedCount, filteredTasks]);

    return (
        <div 
            className={'hidden md:flex flex-col md:flex-1 gap-3 bg-white shadow-lg rounded-2xl py-3 px-5 border-b-4 border-secondary w-full md:max-w-[500px]'}
        >
            <div className={'flex flex-col md:flex-row md:gap-3'}>
                <span className={'text-center md:text-left text-lg font-semibold min-w-[140px]'}>Logged Time</span>
                <ElapsedTime duration={savedTime} />
            </div>
            <div className={'flex flex-col md:flex-row md:gap-3'}>
                <span className={'text-center md:text-left text-lg font-semibold min-w-[140px]'}>Completed</span>
                <span className={'text-center md:text-left text-lg font-semibold text-secondary'}>{completedCount}</span>
            </div>
            <div className={'flex flex-col md:flex-row md:gap-3'}>
                <span className={'text-center md:text-left text-lg font-semibold min-w-[140px]'}>In-Progress</span>
                <span className={'text-center md:text-left text-lg font-semibold text-secondary'}>{inProgressCount}</span>
            </div>
            <div className={'flex flex-col md:flex-row md:gap-3'}>
                <span className={'text-center md:text-left text-lg font-semibold min-w-[140px]'}>Completion</span>
                <span className={'text-center md:text-left text-lg font-semibold text-secondary'}>{completionPercentage} %</span>
            </div>
            {
                isTaskLoading && (
                    <LoadingIndicator />
                )
            }
        </div>
    );
}

export default SummaryCard;