import { useState } from 'react';
import { ITask, ITaskFormValues, TaskHelper } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';
import EditSVG from '../svgs/EditSVG';

interface IEditButtonProps {
    task : ITask;
    disabled : boolean;
}

const EditButton = (props : IEditButtonProps) => {

    const { task, disabled } = props;

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

        const result = await TaskHelper.update(values);

        setIsLoading(false);

        if (result) {
            closeDialog();
        }
        
    };

    return (
        <>
            <button 
                className={'p-1 rounded-full'} 
                onClick={openDialog} 
                disabled={disabled}
            >
                <EditSVG className={disabled ? 'opacity-50' : ''}/>
            </button>
            {
                open && (
                    <TaskDialog 
                        loading={isLoading}
                        task={task}
                        onSave={saveTask}
                        onClose={closeDialog}
                    />
                )
            }
        </>
    );
}

export default EditButton;