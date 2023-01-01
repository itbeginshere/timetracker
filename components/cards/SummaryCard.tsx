import useTaskList from '../../hooks/useTaskList';
import LoadingIndicator from '../common/LoadingIndicator';
import ElapsedTime from './summaryCard/ElapsedTime';

const SummaryCard = () => {
    
    const [isLoading, _, savedTime, completedCount, inProgressCount, completionPercentage] = useTaskList();

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
                isLoading && (
                    <LoadingIndicator />
                )
            }
        </div>
    );
}

export default SummaryCard;