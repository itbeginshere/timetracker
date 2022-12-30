import { useState } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import DeleteDialog from '../dialogs/DeleteDialog';
import DeleteSVG from '../svgs/DeleteSVG';

interface IDeleteButtonProps {
    task : ITask;
    disabled : boolean;
}

const DeleteButton = (props : IDeleteButtonProps) => {
    
    const { task, disabled } = props;

    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const deleteTask = async () => {
        
        setIsLoading(true);

        const result = await TaskHelper.delete(task.refId);

        setIsLoading(false);

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
                        loading={isLoading}
                        onConfirm={deleteTask}
                        onDecline={closeDialog}
                    />
                )
            }
        </>
    )
};

export default DeleteButton;