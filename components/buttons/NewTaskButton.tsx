import { useState } from 'react';
import { ITaskFormValues } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';

const NewTaskButton = () => {
   
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
            <button 
                onClick={openDialog}
                className={'transition rounded-full bg-primary hover:bg-secondary hover:shadow-lg py-3 px-10 w-full md:w-fit hover:translate-y-[-4px] '}
            >
                <span className={'text-white font-semibold uppercase'}>
                    New Task
                </span>
            </button>
            <TaskDialog 
                open={open}
                loading={false}
                onClose={closeDialog}
                onSave={saveTask}
            />
        </>
    )
}

export default NewTaskButton;