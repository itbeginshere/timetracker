import { useEffect, useState } from 'react';
import DeleteButton from '../buttons/DeleteButton';
import Duration from './taskCard/Duration';
import PlayButton from '../buttons/PlayButton';
import EditButton from '../buttons/EditButton';
import CompletedButton from '../buttons/CompletedButton';
import { ITask, TaskHelper } from '../../models/task/task';
import { useAppSelector } from '../../redux/hooks';
import LoadingIndicator from '../common/LoadingIndicator';

interface ITaskCardProps {
    task : ITask;
}

const TaskCard = (props : ITaskCardProps) => {
    
    const { task } = props;

    const isTaskLoading = useAppSelector(x => x.taskState.isLoading); 

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCounting, setIsCounting] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(task.duration);

    useEffect(() => {
        setDuration(task.duration);
    }, [task]);

    useEffect(() => {
      let interval : any = undefined;

      if (!isCounting) {
        clearInterval(interval);
        return;
      }
    
      interval = setInterval(() => {
        setDuration((duration) => duration + 1000);
      }, 1000);
      
      return () => clearInterval(interval);

    }, [isCounting]);

    const togglIsCounting = async () => {
    
        setIsLoading(true);

        if (isCounting) {
            await TaskHelper.pause(task);
        } else {
            await TaskHelper.play(task);
        }

        setIsLoading(false);
        
        setIsCounting(!isCounting);
    };

    return (
        <div className={`relative bg-white shadow-lg rounded-2xl py-3 px-5 border-l-4 w-full box-border ${isCounting ? 'border-primary' : 'border-neutral-900'}`}>
            <div className={'flex flex-row justify-between pb-7'}>
                <div className={'flex flex-col'}>
                    <span className={'text-base md:text-xl font-semibold'}>{task.name}</span>
                    <span className={'text-sm md:text-base font-medium '}>{task.description}</span>
                </div>
                <div className={'flex flex-row gap-2 items-center'}>
                    <CompletedButton task={task} />
                    <EditButton task={task} />
                    <DeleteButton task={task} />
                </div>
            </div>
            <div className={'flex flex-row gap-2 items-center'}>
                <PlayButton isCounting={isCounting} onClick={togglIsCounting}/>
                <Duration value={duration} isCounting={isCounting}/>
            </div>
            {
                (isTaskLoading || isLoading) && (
                    <LoadingIndicator />
                )
            }
        </div>
    );
}

export default TaskCard;