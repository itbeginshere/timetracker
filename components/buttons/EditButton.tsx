import { useState } from 'react';
import { ITask, ITaskFormValues, TaskHelper } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';
import EditSVG from '../svgs/EditSVG';

interface IEditButtonProps {
    task : ITask;
}

const EditButton = (props : IEditButtonProps) => {

    const { task } = props;

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
            <div className={'cursor-pointer p-1'} onClick={openDialog}>
                <EditSVG />
            </div>
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