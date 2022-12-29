import { useEffect, useState } from 'react';
import DeleteButton from '../buttons/DeleteButton';
import Duration from './taskCard/Duration';
import PlayButton from '../buttons/PlayButton';
import EditButton from '../buttons/EditButton';
import CompletedButton from '../buttons/CompletedButton';
import { ITask } from '../../models/task/task';

interface ITaskCardProps {
    task : ITask;
}

const TaskCard = (props : ITaskCardProps) => {
    
    const { task } = props;

    const [isCounting, setIsCounting] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    
    const togglIsCounting = () => {
        setIsCounting(!isCounting);
    };

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

    }, [isCounting])

    return (
        <div className={`bg-white shadow-lg rounded-2xl py-3 px-5 border-l-4 w-full box-border ${isCounting ? 'border-primary' : 'border-neutral-900'}`}>
            <div className={'flex flex-row justify-between pb-7'}>
                <div className={'flex flex-col'}>
                    <span className={'text-base md:text-xl font-semibold'}>{task.name}</span>
                    <span className={'text-sm md:text-base font-medium '}>{task.description}</span>
                </div>
                <div className={'flex flex-row gap-2 items-center'}>
                    <CompletedButton value={false} />
                    <EditButton task={task} />
                    <DeleteButton task={task} />
                </div>
            </div>
            <div className={'flex flex-row gap-2 items-center'}>
                <PlayButton isCounting={isCounting} onClick={togglIsCounting}/>
                <Duration value={duration} isCounting={isCounting}/>
            </div>
        </div>
    );
}

export default TaskCard;