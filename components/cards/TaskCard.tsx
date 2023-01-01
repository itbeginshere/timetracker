import { useEffect, useState } from 'react';
import DeleteButton from '../buttons/DeleteButton';
import Duration from './taskCard/Duration';
import PlayButton from '../buttons/PlayButton';
import EditButton from '../buttons/EditButton';
import CompletedButton from '../buttons/CompletedButton';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppSelector } from '../../redux/hooks';
import LoadingIndicator from '../common/LoadingIndicator';
import useToggle from '../../hooks/useToggle';

interface ITaskCardProps {
    task : ITask;
}

const TaskCard = (props : ITaskCardProps) => {
    
    const { task } = props;

    const isTaskLoading = useAppSelector(x => x.taskState.isLoading); 

    const [loading, startLoading, endLoading] = useToggle();
    const [counting, _, __, toggleCounting] = useToggle();
    const [duration, setDuration] = useState<number>(task.duration);

    useEffect(() => {
        setDuration(task.duration);
    }, [task]);

    useEffect(() => {
      let interval : any = undefined;

      if (!counting) {
        clearInterval(interval);
        return;
      }
    
      interval = setInterval(() => {
        setDuration((duration) => duration + 1000);
      }, 1000);
      
      return () => clearInterval(interval);

    }, [counting]);

    const togglIsCounting = async () => {
    
        startLoading();

        if (counting) {
            await TaskHelper.pause(task);
        } else {
            await TaskHelper.play(task);
        }

        endLoading();
        
        toggleCounting();
    };

        
    const toggleCompleted = async () => {
        
        startLoading();

        await TaskHelper.completed(task.completed, task.refId);

        endLoading();
        
    }

    return (
        <div className={`relative bg-white shadow-lg rounded-2xl py-3 px-5 border-l-4 flex flex-col  w-full box-border ${counting ? 'border-primary' : 'border-neutral-900'}`}>
            <div className={'flex flex-row justify-between pb-7'}>
                <div className={'flex flex-col'}>
                    <span className={'text-base md:text-xl font-semibold'}>{task.name}</span>
                    <span className={'text-sm md:text-base font-medium '}>{task.description}</span>
                </div>
                <div className={'flex flex-row gap-2 items-center'}>
                    <CompletedButton task={task} onClick={toggleCompleted}/>
                    <EditButton task={task} disabled={task.completed}/>
                    <DeleteButton task={task} disabled={task.completed} />
                </div>
            </div>
            <div className={'flex flex-row gap-2 items-center'}>
                <PlayButton disabled={task.completed} isCounting={counting} onClick={togglIsCounting}/>
                <Duration value={duration} isCounting={counting}/>
            </div>
            {
                (isTaskLoading || loading) && (
                    <LoadingIndicator />
                )
            }
        </div>
    );
}

export default TaskCard;