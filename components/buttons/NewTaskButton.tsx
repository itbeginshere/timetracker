import { useState } from 'react';
import { ITaskFormValues, TaskHelper } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';
import PlusSVG from '../svgs/PlusSVG';

interface INewTaskButtonProps {
    className ?: string;
}

const NewTaskButton = (props : INewTaskButtonProps) => {
   
    const { className } = props;

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
                className={`group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg ${className ?? ''}`}
            >
                <PlusSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
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