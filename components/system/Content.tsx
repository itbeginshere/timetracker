import SummaryCard from '../cards/SummaryCard';
import TaskList from '../llist/TaskList';

const Content = () => {
    return (
        <main className={'flex flex-col flex-1 md:flex-row items-center md:items-start md:justify-between gap-4 py-6 overflow-hidden'}>
            <TaskList />
            <SummaryCard />
        </main>
    );
}

export default Content;