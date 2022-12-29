import { useEffect } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import NoTasksCard from '../cards/NoTasksCard';
import TaskCard from '../cards/TaskCard';

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
        <div className={'flex flex-col gap-4 overflow-y-auto relative'}>
            {
                !tasks.length ? (
                        <NoTasksCard />
                    ) : (
                        tasks.map((task : ITask, index : number) => (
                            <TaskCard key={index} task={task} />
                        ))
                    )
            }
        </div>
    );
};

export default TaskList;