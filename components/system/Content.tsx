import NewTaskButton from '../buttons/NewTaskButton';
import SummaryCard from '../cards/SummaryCard';
import TaskCard from '../cards/TaskCard';

const Content = () => {
    return (
        <div className={'flex flex-col w-[80%] xl:w-[60%] m-auto gap-6 py-6'}>
            <div className={'flex flex-col md:flex-row items-center md:justify-between gap-4'}>
                <div className={'w-full md:max-w-[500px]'}>
                    <TaskCard/>
                </div>
                <div className={'w-full md:max-w-[500px]'}>
                    <SummaryCard />
                </div>
            </div>
            <div className={'flex flex-row justify-end'}>
                <NewTaskButton />
            </div>
        </div>
    );
}

export default Content;