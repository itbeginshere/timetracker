import SummaryCard from '../cards/SummaryCard';
import TaskCard from '../cards/TaskCard';

const Content = () => {
    return (
        <div className={'flex flex-col md:flex-row items-center md:justify-between gap-4 py-10 px-10 w-full'}>
            <div className={'w-full'}>
                <TaskCard/>
            </div>
            <div className={'w-full'}>
                <SummaryCard />
            </div>
        </div>
    );
}

export default Content;