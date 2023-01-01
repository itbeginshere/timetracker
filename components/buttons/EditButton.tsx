import useToggle from '../../hooks/useToggle';
import { ITask, ITaskFormValues, TaskHelper } from '../../models/task/task';
import TaskDialog from '../dialogs/TaskDialog';
import EditSVG from '../svgs/EditSVG';

interface IEditButtonProps {
    task : ITask;
    disabled : boolean;
}

const EditButton = (props : IEditButtonProps) => {

    const { task, disabled } = props;

    const [open, openDialog, closeDialog] = useToggle();
    const [loading, startLoding, endLoading] = useToggle();

    const saveTask = async (values : ITaskFormValues) => {
        
        startLoding();

        const result = await TaskHelper.update(values);

        endLoading();

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
                        loading={loading}
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