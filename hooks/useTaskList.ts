import moment from 'moment';
import { useEffect, useMemo } from 'react';
import { ITask, TaskHelper } from '../models/task/task';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

type UseTaskListType = [boolean, Array<ITask>, moment.Duration, number, number, number];

const useTaskList = () : UseTaskListType => {

    const user = useAppSelector(x => x.userState.user);
    const tasks = useAppSelector(x => x.taskState.tasks);
    const isLoading = useAppSelector(x => x.taskState.isLoading);
    const startDate = useAppSelector(x => x.taskState.startDate);
    const endDate = useAppSelector(x => x.taskState.endDate);
    const showCompleted = useAppSelector(x => x.taskState.completed);
    
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (!user) return;

        dispatch(TaskHelper.getListThunk());

        return () => TaskHelper.severConnection();

    }, [user, tasks, dispatch]);

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

    const savedTime = useMemo(() => {

        const totalDuration = filteredTasks.reduce((acc, item) => {
            return acc + item.duration;
        }, 0);

        return moment.duration(totalDuration);

    }, [filteredTasks]);

    const completedCount = useMemo(() => {
        return filteredTasks.filter(x => x.completed).length;
    }, [filteredTasks]);

    const inProgressCount = useMemo(() => {
        return filteredTasks.filter(x => !x.completed).length;
    }, [filteredTasks]);

    const completionPercentage = useMemo(() => {
        
        if (completedCount <= 0 || filteredTasks.length <= 0) return 0;
        
        return Math.round((completedCount / filteredTasks.length) * 100);
    },[completedCount, filteredTasks]);

    return [isLoading, filteredTasks, savedTime, completedCount, inProgressCount, completionPercentage];
}

export default useTaskList;