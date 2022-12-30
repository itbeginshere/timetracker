import { useState } from 'react';
import { ITaskFormValues, TaskHelper } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';

const NewTaskButton = () => {
   
    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const saveTask = async (values : ITaskFormValues) => {
        
        setIsLoading(true);

        const result = await TaskHelper.create(values);

        setIsLoading(false);
        
        if (result) {
            closeDialog();
        }
    };
   
    return (
        <>
            <button 
                onClick={openDialog}
                className={'transition rounded-full bg-primary hover:bg-secondary hover:shadow-lg py-3 px-9 w-full md:w-fit hover:translate-y-[-4px] '}
            >
                <span className={'text-white font-semibold uppercase whitespace-nowrap	'}>
                    New Task
                </span>
            </button>
            {
                open && (
                    <TaskDialog 
                        loading={isLoading}
                        onClose={closeDialog}
                        onSave={saveTask}
                    />
                )
            }
        </>
    )
}

export default NewTaskButton;