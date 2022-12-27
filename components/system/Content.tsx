import NewTaskButton from '../buttons/NewTask';
import SummaryCard from '../cards/SummaryCard';
import TaskCard from '../cards/TaskCard';

const Content = () => {
    return (
        <div className={'flex flex-col w-[80%] m-auto gap-6 py-6'}>
            <div className={'flex flex-col md:flex-row items-center md:justify-between gap-4 w-full'}>
                <div className={'w-full'}>
                    <TaskCard/>
                </div>
                <div className={'w-full'}>
                    <SummaryCard />
                </div>
            </div>
            <NewTaskButton />
        </div>
    );
}

export default Content;