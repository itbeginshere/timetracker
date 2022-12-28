import { ITask } from '../../models/task/task';
import CheckedSVG from '../svgs/CheckedSVG';
import UnCheckedSVG from '../svgs/UnCheckedSVG';

interface ICompletedButtonProps {
    value : boolean;
    task ?: ITask;
}

const CompletedButton = (props : ICompletedButtonProps) => {
    
    const { value } = props;
    
    const toggleCompleted = () => {

    }

    return (
        <div className={'cursor-pointer p-1'} onClick={toggleCompleted}>
            {value ? <CheckedSVG className={'fill-secondary'}/> : <UnCheckedSVG fill={'black'}/>}
        </div>
    )
}

export default CompletedButton;