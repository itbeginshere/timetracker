import { useState } from 'react';
import { ITask } from '../../models/task/task';
import DeleteDialog from '../dialogs/DeleteDialog';
import DeleteSVG from '../svgs/DeleteSVG';

interface IDeleteButtonProps {
    task ?: ITask;
}

const DeleteButton = (props : IDeleteButtonProps) => {
    
    const { task } = props;

    const [open, setOpen] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const deleteTask = () => {
        closeDialog();
    };

    return (
        <>
            <div onClick={openDialog}>
                <DeleteSVG className={''}/>
            </div>
            <DeleteDialog 
                open={open}
                task={task}
                onConfirm={deleteTask}
                onDecline={closeDialog}
            />
        </>
    )
};

export default DeleteButton;