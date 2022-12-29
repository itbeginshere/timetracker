import { useState } from 'react';
import { ITask, ITaskFormValues } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';
import EditSVG from '../svgs/EditSVG';

interface IEditButtonProps {
    task : ITask;
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

    const saveTask = (values : ITaskFormValues) => {
        closeDialog();
    };

    return (
        <>
            <div className={'cursor-pointer p-1'} onClick={openDialog}>
                <EditSVG />
            </div>
            <TaskDialog 
                open={open} 
                loading={false}
                task={task}
                onSave={saveTask}
                onClose={closeDialog}
            />
        </>
    );
}

export default EditButton;