import { useEffect } from 'react';
import { auth } from '../../firebase';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import NoTasksCard from '../cards/NoTasksCard';
import TaskCard from '../cards/TaskCard';

const TaskList = () => {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector(x => x.taskState.tasks);

    useEffect(() => {

        if (!auth.currentUser) return;

        dispatch(TaskHelper.getListThunk());

        return TaskHelper.severConnection();
    }, [auth.currentUser]);

    return (
        <>
            {
                !tasks.length ? (
                        <NoTasksCard />
                    ) : (
                        tasks.map((task : ITask, index : number) => (
                            <TaskCard key={index} task={task} />
                        ))
                    )
            }
        </>
    );
};

export default TaskList;