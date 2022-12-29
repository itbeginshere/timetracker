import moment from 'moment';
import { useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';
import LoadingIndicator from '../common/LoadingIndicator';
import ElapsedTime from './summaryCard/ElapsedTime';

const SummaryCard = () => {
    
    const tasks = useAppSelector(x => x.taskState.tasks);
    const isTaskLoading = useAppSelector(x => x.taskState.isLoading);
    
    const savedTime = useMemo(() => {

        const totalDuration = tasks.reduce((acc, item) => {
            return acc + item.duration;
        }, 0);

        return moment.duration(totalDuration);

    }, [tasks]);

    const completedCount = useMemo(() => {
        return tasks.filter(x => x.completed).length;
    }, [tasks]);

    const inProgressCount = useMemo(() => {
        return tasks.filter(x => !x.completed).length;
    }, [tasks]);

    const completionPercentage = useMemo(() => {
        
        if (completedCount <= 0 || tasks.length <= 0) return 0;
        
        return (completedCount / tasks.length) * 100;
    },[completedCount, tasks]);

    return (
        <div className={'flex flex-col gap-3 bg-white shadow-lg rounded-2xl py-3 px-5 border-b-4 border-secondary w-full'}>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold min-w-[140px]'}>Logged Time</span>
                <ElapsedTime duration={savedTime} />
            </div>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold min-w-[140px]'}>Completed</span>
                <span className={'text-lg font-semibold text-secondary'}>{completedCount}</span>
            </div>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold min-w-[140px]'}>In-Progress</span>
                <span className={'text-lg font-semibold text-secondary'}>{inProgressCount}</span>
            </div>
            <div className={'flex flex-row gap-3'}>
                <span className={'text-lg font-semibold min-w-[140px]'}>Completion</span>
                <span className={'text-lg font-semibold text-secondary'}>{completionPercentage} %</span>
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