import React, { useEffect, useMemo } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import FilterButton from '../buttons/FilterButton';
import NoTasksCard from '../cards/NoTasksCard';
import TaskCard from '../cards/TaskCard';
import LoadingIndicator from '../common/LoadingIndicator';

const TaskList = () => {

    const user = useAppSelector(x => x.userState.user);
    const tasks = useAppSelector(x => x.taskState.tasks);
    const isTaskLoading = useAppSelector(x => x.taskState.isLoading);
    const startDate = useAppSelector(x => x.taskState.startDate);
    const endDate = useAppSelector(x => x.taskState.endDate);
    const showCompleted = useAppSelector(x => x.taskState.completed);

    const dispatch = useAppDispatch();

    useEffect(() => {

        if (!user) return;

        dispatch(TaskHelper.getListThunk())

        return () => TaskHelper.severConnection();

    }, [user, dispatch]);

    const filteredTasks = useMemo(() => {

        let result = tasks.filter(x => showCompleted ? true : !x.completed);

        if (startDate) {
            result = result.filter(x => x.createdOn >= startDate.valueOf());
        }

        if (endDate) {
            result = result.filter(x => x.createdOn <= endDate.valueOf());
        }

        return result;

    }, [tasks, showCompleted, startDate, endDate]);

    return (
        <div className={'flex flex-col flex-1 items-stretch gap-4 overflow-y-auto relative h-full w-full md:max-w-[500px]'}>
            <div className={'flex flex-row items-center justify-end flex-wrap gap-2'}>
               <FilterButton />
            </div>
            {
                !filteredTasks.length ? (
                        <NoTasksCard />
                    ) : (
                         filteredTasks.map((task : ITask, index : number) => (
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