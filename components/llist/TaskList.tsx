import { useEffect } from 'react';
import useTaskList from '../../hooks/useTaskList';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import FilterButton from '../buttons/FilterButton';
import NoTasksCard from '../cards/NoTasksCard';
import TaskCard from '../cards/TaskCard';
import LoadingIndicator from '../common/LoadingIndicator';

const TaskList = () => {

    const [isLoading, tasks] = useTaskList();

    const user = useAppSelector(x => x.userState.user);
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (!user) return;

        dispatch(TaskHelper.getListThunk());

        return () => TaskHelper.severConnection();

    }, [user, dispatch]);

    return (
        <div className={'flex flex-col flex-1 items-stretch gap-4 overflow-y-auto relative h-full w-full md:max-w-[500px]'}>
            <div className={'flex flex-row items-center justify-end flex-wrap gap-2'}>
               <FilterButton />
            </div>
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
                isLoading && (
                    <LoadingIndicator />
                )
            }
        </div>
    );
};

export default TaskList;