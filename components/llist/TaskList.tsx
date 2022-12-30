import { useEffect } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import NoTasksCard from '../cards/NoTasksCard';
import TaskCard from '../cards/TaskCard';
import LoadingIndicator from '../common/LoadingIndicator';

const TaskList = () => {

    const user = useAppSelector(x => x.userState.user);
    const tasks = useAppSelector(x => x.taskState.tasks);
    const isTaskLoading = useAppSelector(x => x.taskState.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {

        if (!user) return;

        dispatch(TaskHelper.getListThunk())

        return () => TaskHelper.severConnection();

    }, [user, dispatch])

    return (
        <div className={'flex flex-col flex-1 items-stretch gap-4 overflow-y-auto relative h-full w-full md:max-w-[500px]'}>
            {
                !tasks.length ? (
                        <NoTasksCard />
                    ) : (
                        tasks.map((task : ITask, index : number) => (
                            <TaskCard key={index} task={task} />
                        ))
                    )
            }
            {
                isTaskLoading && (
                    <LoadingIndicator />
                )
            }
        </div>
    );
};

export default TaskList;