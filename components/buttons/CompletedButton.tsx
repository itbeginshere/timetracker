import { useState } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import CheckedSVG from '../svgs/CheckedSVG';
import UnCheckedSVG from '../svgs/UnCheckedSVG';

interface ICompletedButtonProps {
    task : ITask;
}

const CompletedButton = (props : ICompletedButtonProps) => {
    
    const { task } = props;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const toggleCompleted = async () => {
        
        setIsLoading(true);

        await TaskHelper.completed(task.completed, task.refId);

        setIsLoading(false);
        
    }

    return (
        <div 
            className={'cursor-pointer p-1'} 
            onClick={isLoading ? undefined : toggleCompleted}
        >
            {task.completed ? <CheckedSVG className={'fill-secondary'}/> : <UnCheckedSVG fill={'black'}/>}
        </div>
    )
}

export default CompletedButton;