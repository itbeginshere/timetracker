import { useState } from 'react';
import { ITask, TaskHelper } from '../../models/task/task';
import DeleteDialog from '../dialogs/DeleteDialog';
import DeleteSVG from '../svgs/DeleteSVG';

interface IDeleteButtonProps {
    task : ITask;
}

const DeleteButton = (props : IDeleteButtonProps) => {
    
    const { task } = props;

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
            <div className={'cursor-pointer p-1'} onClick={openDialog}>
                <DeleteSVG/>
            </div>
            <DeleteDialog 
                open={open}
                task={task}
                loading={isLoading}
                onConfirm={deleteTask}
                onDecline={closeDialog}
            />
        </>
    )
};

export default DeleteButton;