import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ToggleButton from '../buttons/ToggleButton';
import NoTasksCard from '../cards/NoTasksCard';
import TaskCard from '../cards/TaskCard';
import LoadingIndicator from '../common/LoadingIndicator';
import DatePicker from '../input/DatePicker';
import VisibilitySVG from '../svgs/VisibilitySVG';

const TaskList = () => {

    const user = useAppSelector(x => x.userState.user);
    const tasks = useAppSelector(x => x.taskState.tasks);
    const isTaskLoading = useAppSelector(x => x.taskState.isLoading);

    const dispatch = useAppDispatch();

    const [showCompleted, setShowCompleted] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);

    useEffect(() => {

        if (!user) return;

        dispatch(TaskHelper.getListThunk())

        return () => TaskHelper.severConnection();

    }, [user, dispatch]);

    const toggleCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const onStartDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(moment.utc(event.target.value, 'YYYY-MM-DD').local());
    } 

    const onEndDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(moment.utc(event.target.value, 'YYYY-MM-DD').local());
    } 

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
             <div className={'flex flex-row items-center justify-between flex-wrap gap-2'}>
                <div className="flex flex-row items-center gap-3 flex-wrap">
                    <DatePicker value={startDate} onChange={onStartDateChange} />
                    <DatePicker value={endDate} onChange={onEndDateChange} />
                </div>
                <ToggleButton 
                    value={showCompleted}
                    label={'Completed'}
                    onChange={toggleCompleted}
                />
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