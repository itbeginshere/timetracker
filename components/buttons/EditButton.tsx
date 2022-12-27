import { useState } from 'react';
import { ITask } from '../../models/task/task';
import EditDialog from '../dialogs/EditDialog';
import EditSVG from '../svgs/EditSVG';

interface IEditButtonProps {
    task ?: ITask;
}

const EditButton = (props : IEditButtonProps) => {

    const { task } = props;

    const [open, setOpen] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const saveTask = () => {
        closeDialog();
    };

    return (
        <>
            <div className={'cursor-pointer p-1'} onClick={openDialog}>
                <EditSVG />
            </div>
            <EditDialog 
                open={open} 
                onSave={saveTask}
                onClose={closeDialog}
            />
        </>
    );
}

export default EditButton;