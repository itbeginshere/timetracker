import useTaskList from '../../hooks/useTaskList';
import ElapsedTime from '../cards/summaryCard/ElapsedTime';
import DialogHeader from './common/DialogHeader';
import DialogWrapper from './common/DialogWrapper';

interface IStatsDialog {
    onClose : () => void;
}

const StatsDialog = (props : IStatsDialog) => {
    
    const { onClose } = props;
     
    const [isLoading, _, savedTime, completedCount, inProgressCount, completionPercentage] = useTaskList();

    return (
       <DialogWrapper loading={isLoading} onClose={onClose}>
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