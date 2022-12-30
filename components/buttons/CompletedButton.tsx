import { ITask } from '../../models/task/task';
import CheckedSVG from '../svgs/CheckedSVG';
import UnCheckedSVG from '../svgs/UnCheckedSVG';

interface ICompletedButtonProps {
    task : ITask;
    onClick : () => void;
}

const CompletedButton = (props : ICompletedButtonProps) => {
    
    const { task } = props;
    const { onClick } = props;

    return (
        <button 
            className={'rounded-xl p-1'} 
            onClick={onClick}
        >
            {task.completed ? <CheckedSVG className={'fill-secondary'}/> : <UnCheckedSVG fill={'black'}/>}
        </button>
    )
}

export default CompletedButton;