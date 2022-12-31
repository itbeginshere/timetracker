import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import { useMemo } from 'react';
import { BugHelper, IBugFormValues } from '../../models/bug/bug';
import { useAppSelector } from '../../redux/hooks';
import ElapsedTime from '../cards/summaryCard/ElapsedTime';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface IStatsDialog {
    onClose : () => void;
}

const StatsDialog = (props : IStatsDialog) => {
    
    const { onClose } = props;
     
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
        
        return Math.round((completedCount / tasks.length) * 100);
    },[completedCount, tasks]);

    return (
       <DialogWrapper open={true} loading={isTaskLoading} onClose={onClose}>
            <DialogHeader title={'Statistics'}/>
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
       </DialogWrapper>
    );
}

export default StatsDialog;