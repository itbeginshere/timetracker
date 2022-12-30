import SummaryCard from '../cards/SummaryCard';
import TaskList from '../llist/TaskList';

const Content = () => {
    return (
        <div className={'flex flex-col flex-1 md:flex-row items-center md:items-start md:justify-between gap-4 py-6 overflow-hidden'}>
            <TaskList />
            <SummaryCard />
        </div>
    );
}

export default Content;