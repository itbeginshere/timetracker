import useToggle from '../../hooks/useToggle';
import { ITask, TaskHelper } from '../../models/task/task';
import DeleteDialog from '../dialogs/DeleteDialog';
import DeleteSVG from '../svgs/DeleteSVG';

interface IDeleteButtonProps {
    task : ITask;
    disabled : boolean;
}

const DeleteButton = (props : IDeleteButtonProps) => {
    
    const { task, disabled } = props;

    const [open, openDialog, closeDialog] = useToggle();
    const [loading, startLoding, endLoading] = useToggle();
    
    const deleteTask = async () => {
        
        startLoding();

        const result = await TaskHelper.delete(task.refId);

        endLoading();

        if (result) {
            closeDialog();
        }

    };

    return (
        <>
            <button 
                className={'p-1 rounded-xl'} 
                disabled={disabled}
                onClick={openDialog}
            >
                <DeleteSVG className={disabled ? 'opacity-50' : ''}/>
            </button>
            {
                open && (
                     <DeleteDialog 
                        task={task}
                        loading={loading}
                        onConfirm={deleteTask}
                        onDecline={closeDialog}
                    />
                )
            }
        </>
    )
};

export default DeleteButton;