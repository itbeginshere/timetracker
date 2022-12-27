import TaskCard from '../cards/TaskCard';

const Content = () => {
    return (
        <div className={'flex flex-col md:flex-row items-center md:justify-between gap-4 py-10 px-10'}>
            <div>
                <div>
                    List of cards
                </div>
                <TaskCard/>
            </div>
            <div>Summary of tasks</div>
        </div>
    );
}

export default Content;